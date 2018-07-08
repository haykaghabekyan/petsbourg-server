import { Router } from "express";
import cloudinary from "cloudinary";
import multer from "multer";

import {
    CLOUDINARY_API_KEY,
    CLOUDINARY_API_SECRET,
    CLOUDINARY_CLOUD_NAME,
} from "../configs/cloudinary";

import requireAuth from "../utils/require-auth";
import models from "../db/models/index";
const { User } = models;

cloudinary.config({
    cloud_name: CLOUDINARY_CLOUD_NAME,
    api_key: CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_API_SECRET,
});

const upload = multer({
    storage: multer.memoryStorage(),
    limits:{
        fileSize: 1024 * 1024,
    },
});

class UploadsRouter {

    router = null;

    constructor() {
        this.router = Router();
        this.router.post('/:userId/profile', requireAuth, this.uploadUserProfilePicture);
        // this.router.post('/:petId', this.uploadUserProfilePicture);
    }

    uploadUserProfilePicture(req, res) {
        const { params: { userId } } = req;

        const profilePictureUpload = upload.single('profilePicture');

        profilePictureUpload(req, res, error => {
            if (error) {
                console.error(error);

                res.status(404).json({
                    success: false,
                });
            }

            cloudinary.v2.uploader.upload_stream({
                resource_type: "auto",
            }, (error, result) => {
                if (error) {
                    console.error(error);

                    res.status(404).json({
                        success: false,
                    });
                }

                const promise = User.update({
                    profilePicture: result.public_id,
                }, {
                    where: {
                        id: userId,
                    },
                    attributes: ["id", "name"],
                    returning: true,
                    limit: 1,
                });

                promise.then(user => {
                    res.status(200).json({
                        success: true,
                        user: user[1][0],
                    });
                }).catch(error => {
                    res.status(404).json({
                        success: false,
                    });
                });

            }).end(req.file.buffer);
        });
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
