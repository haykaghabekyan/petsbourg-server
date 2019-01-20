import { Router } from 'express';
import { requireAuth } from '../utils/require-auth';
import { User } from '../models/user';
import { Pet } from '../models/pet';

class PetsRouter {
    router = null;

    constructor() {
        this.router = Router();

        this.router.get('/:petId', PetsRouter.get);
        this.router.get('/:petId/user', PetsRouter.getOwner);
        this.router.put('/:petId', requireAuth, PetsRouter.update);
        this.router.post('/', requireAuth, PetsRouter.create);
    }

    static async getOwner(req, res) {
        const { params: { petId } } = req;

        try {
            const pet = await Pet.findById(petId).populate({
                path: 'owner',
                select: '_id firstName lastName email gender isVerified picture biography',
            });

            res.status(200).send({
                success: true,
                user: pet.owner,
            });
        } catch (error) {
            res.status(400).send({
                success: false,
                message: 'Something went wrong while getting pet.'
            });
        }
    }

    static async get(req, res) {
        const { params: { petId } } = req;

        try {
            const pet = await Pet.findById(petId)
                .populate('type', '_id name')
                .populate('breed', '_id name');

            res.status(200).send({
                success: true,
                pet: pet,
            });
        } catch (error) {
            res.status(400).send({
                success: false,
                message: 'Something went wrong while getting pet.'
            });
        }
    }

    static async update(req, res) {
        const { params: { petId }, user, body } = req;

        try {
            const pet = await Pet.findByIdAndUpdate(petId, {
                $set: {
                    ...body,
                    birthday: new Date(body.birthday),
                },
            }, {
                new: true,
            }).populate({
                path: 'owner',
                select: '_id firstName lastName email picture biography',
                populate: {
                    path: 'pets',
                    select: '_id name',
                    populate: [{
                        path: 'type',
                        select: '_id name',
                    }, {
                        path: 'breed',
                        select: '_id name',
                    }],
                },
            })
            .populate('type', '_id name')
            .populate('breed', '_id name');

            res.status(200).json({
                success: true,
                pet: {
                    profile: pet,
                },
            });

        } catch(error) {
            res.status(400).send({
                success: false,
                msg: 'Something went wrong, please try later.',
            });
        }
    }

    static async create(req, res) {
        const { user, body } = req;

        try {
            const owner = await User.findById(user._id);

            if (!owner) {
                res.status(500).send({
                    success: false,
                    msg: 'Something went wrong, please try later.',
                });
            }

            try {
                const pet = await Pet.create({
                    owner: user._id,
                    ...body,
                });

                try {
                    owner.pets.push(pet);
                    await owner.save();

                    res.status(200).send({
                        success: true,
                        pet: pet,
                    });
                } catch(error) {
                    console.error('error while saving user pets', error);
                }
            } catch (error) {
                console.error('error while creating pet', error);

                res.status(500).send({
                    success: false,
                    msg: 'Something went wrong, please try later.',
                });
            }

        } catch (error) {
            res.status(400).send({
                success: false,
                msg: 'Something went wrong, please try later.',
            });
        }
    }
}

export default (new PetsRouter()).router;
