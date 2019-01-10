import { Router } from 'express';
import { requireAuth } from '../utils/require-auth';
import { User } from '../models/user';
import { Pet } from '../models/pet';

class UsersRouter {
    router = null;

    constructor() {
        this.router = Router();
        this.router.get('/:userId/pets/:petId', UsersRouter.getUserPet);
        this.router.get('/:userId/pets', UsersRouter.getUserPets);
        this.router.get('/:userId', UsersRouter.get);
        this.router.put('/:userId', requireAuth, UsersRouter.update);
    }

    static async update(req, res) {
        const { params: { userId }, user, body } = req;

        if (user._id !== userId) {
            return res.status(400).send({
                success: false,
                msg: 'Something went wrong.',
            });
        }

        try {
            const updatedUser = await User.findByIdAndUpdate(userId, {
                $set: body,
            }, {
                new: true,
            }).select('_id firstName lastName email gender isVerified picture biography')
                .populate({
                    path: 'pets',
                    select: '_id name',
                    populate: [{
                        path: 'type',
                        select: '_id name',
                    }, {
                        path: 'breed',
                        select: '_id name',
                    }],
                });

            res.status(200).send({
                success: true,
                user: {
                    profile: updatedUser,
                },
            });

        } catch (error) {
            res.status(500).send({
                success: false,
                errors: {
                    message: 'Something went wrong.',
                },
            });
        }
    }

    static async get(req, res) {
        const { userId = '' } = req.params;

        try {
            const user = await User.findById(userId)
                .select('_id firstName lastName email gender isVerified biography picture');

            if (!user) {
                res.status(404).send({
                    success: false,
                    errors: {
                        message: 'User not found.'
                    },
                });
            }

            res.send({
                success: true,
                user: {
                    id: user.id,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                    gender: user.gender,
                    biography: user.biography,
                    picture: user.picture,
                },
            });
        } catch (error) {
            res.status(500).send({
                success: false,
                errors: {
                    message: 'Something went wrong.',
                },
            });
        }
    }

    static async getUserPets(req, res) {
        const { userId = '' } = req.params;

        try {
            const pets = await Pet.find({ owner: userId })
                .select('_id name gender story passportId color size')
                .populate("type", "_id name")
                .populate("breed", "_id name");

            res.send({
                success: true,
                pets: pets,
            });
        } catch (error) {
            res.status(400).send({
                success: false,
                message: "Something went wrong."
            });
        }
    }

    static async getUserPet(req, res) {
        const { userId = '', petId = '' } = req.params;
    }
}

export default (new UsersRouter()).router;