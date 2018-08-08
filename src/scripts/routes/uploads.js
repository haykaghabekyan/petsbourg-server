import { Router } from "express";
import multer from "multer";
import cloudinary from "cloudinary";
import { CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET, CLOUDINARY_CLOUD_NAME } from "../configs/cloudinary";
import { User } from "../models/user";
import { Pet } from "../models/pet";

cloudinary.config({
    cloud_name: CLOUDINARY_CLOUD_NAME,
    api_key: CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_API_SECRET,
});

const storage = multer.memoryStorage();
const upload = multer({
    storage: storage,
});

class UploadsRouter {

    router = null;

    constructor() {
        this.router = Router();
        this.router.post('/:userId/user', upload.single('picture'), UploadsRouter.uploadUserPicture);
        this.router.post('/:petId/pet', upload.single('picture'), UploadsRouter.uploadPetPicture);
    }

    static async uploadPetPicture(req, res) {
        const { params: { petId } } = req;

        let pet;

        try {
            pet = await Pet.findById(petId);
        } catch(error) {
            console.error("error while finding the pet", error);

            res.status(500).send({
                success: false,
                msg: "Something went wrong.",
            });
        }

        if (!pet) {
            return res.status(404).send({
                success: false,
                msg: "No pet found",
            });
        }

        if (pet && pet.picture) {
            try {
                const result = await cloudinary.uploader.destroy(pet.picture.publicId);
                console.log(result);
            } catch (e) {
                console.error(e);
            }
        }

        cloudinary.v2.uploader.upload_stream({
            folder: 'pets',
        }, async (error, result) => {
            if (error) {
                console.error("error while uploading to cloudinary", error);

                return res.status(500).json({
                    success: false,
                    message: "Something went wrong",
                });
            }

            pet.picture = {
                source: 'cloudinary',
                publicId: result.public_id
            };

            try {
                const updatedPet = await pet.save();

                res.status(200).send({
                    success: true,
                    picture: updatedPet.picture,
                });

            } catch (error) {
                console.error("error while updating user", error);

                res.status(500).send({
                    success: false,
                    msg: "Something went wrong.",
                });
            }

        }).end(req.file.buffer);
    }

    static async uploadUserPicture(req, res) {
        const { params: { userId } } = req;

        let user;

        try {
            user = await User.findById(userId);
        } catch(error) {
            console.error("error while finding the user", error);

            res.status(500).send({
                success: false,
                msg: "Something went wrong.",
            });
        }

        if (!user) {
            return res.status(404).send({
                success: false,
                msg: "No user found",
            });
        }

        if (user && user.picture) {
            try {
                const result = await cloudinary.uploader.destroy(user.picture.publicId);
                console.log(result);
            } catch (e) {
                console.error(e);
            }
        }

        cloudinary.v2.uploader.upload_stream({
            folder: 'users',
        }, async (error, result) => {
            if (error) {
                console.error("error while uploading to cloudinary", error);

                return res.status(500).json({
                    success: false,
                    message: "Something went wrong",
                });
            }

            user.picture = {
                source: 'cloudinary',
                publicId: result.public_id
            };

            try {
                const updatedUser = await user.save();

                res.status(200).send({
                    success: true,
                    picture: updatedUser.picture,
                });

            } catch (error) {
                console.error("error while updating user", error);

                res.status(500).send({
                    success: false,
                    msg: "Something went wrong.",
                });
            }

        }).end(req.file.buffer);
    }

    // uploadPetPhotos(req, res) {
    //     const { params: { petId } } = req;
    //
    //     res.status(200).json({
    //         success: true,
    //         petId
    //     });
    // }

}

export default (new UploadsRouter()).router;

