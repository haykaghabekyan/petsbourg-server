import { Router } from "express";
import AWS from "aws-sdk";
import multer from "multer";
import uuidv4 from "uuid/v4";
import { AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_BUCKET } from "../configs/aws";

const upload = multer();

const s3 = new AWS.S3({
    accessKeyId: AWS_ACCESS_KEY_ID,
    secretAccessKey: AWS_SECRET_ACCESS_KEY,
    bucket: AWS_BUCKET,
});

class UploadsRouter {

    router = null;

    constructor() {
        this.router = Router();
        this.router.post('/:userId/profile', upload.single('profilePicture'), this.uploadUserProfilePicture);
        // this.router.post('/:petId', this.uploadUserProfilePicture);
    }

    uploadUserProfilePicture(req, res) {
        const { params: { userId } } = req;

        console.log(req.file);

        s3.upload({
            Bucket: AWS_BUCKET,
            Key: uuidv4(),
            Body: req.file.buffer,
            ACL: 'public-read',
        }, (error, data) => {
            if (error) {
                console.error(error);

                res.status(403).json({
                    success: false,
                });
            }

            const { ETag, Key, Location } = data;

            res.status(200).json({
                success: true,
                Location,
            });
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
