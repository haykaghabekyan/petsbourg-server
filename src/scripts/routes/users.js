import { Router } from "express";
import { requireAuth } from "../utils/require-auth";
import { User } from "../models/user";

class UsersRouter {
    router = null;

    constructor() {
        this.router = Router();
        this.router.get('/:userId', UsersRouter.get);
        this.router.put('/:userId', requireAuth, UsersRouter.update);
    }

    static async update(req, res) {
        const { params: { userId }, user, body } = req;

        if (user._id !== userId) {
            return res.status(400).send({
                success: false,
                msg: "Something went wrong.",
            });
        }

        try {
            const updatedUser = await User.findByIdAndUpdate(userId, {
                $set: body,
            }, {
                new: true,
            }).select("_id firstName lastName email gender isVerified biography")
                .populate({
                    path: "pets",
                    select: "_id name",
                    populate: [{
                        path: "type",
                        select: "_id name",
                    }, {
                        path: "breed",
                        select: "_id name",
                    }],
                });

            res.status(200).send({
                success: true,
                user: {
                    profile: updatedUser,
                },
            });

        } catch (error) {
            console.error("error while updating user", error);

            res.status(500).send({
                success: false,
                msg: "Something went wrong.",
            });
        }
    }

    static async get(req, res) {
        const { params: { userId } } = req;

        try {
            const user = await User.findById(userId)
                .select("_id firstName lastName email gender isVerified biography picture")
                .populate({
                    path: "pets",
                    select: "_id name",
                    populate: [{
                        path: "type",
                        select: "_id name",
                    }, {
                        path: "breed",
                        select: "_id name",
                    }],
                });

            if (!user) {
                res.status(404).send({
                    success: true,
                    user: {
                        profile: null,
                    },
                });
            }

            res.status(200).send({
                success: true,
                user: {
                    profile: user,
                },
            });
        } catch (error) {
            console.error("error while getting user", error);

            res.status(500).send({
                success: false,
                msg: "Something went wrong while getting user with pets.",
            });
        }
    }
}

export default (new UsersRouter()).router;