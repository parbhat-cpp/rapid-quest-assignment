import { Request, Response } from "express";
import httpStatus from 'http-status';
import cloudinary from "cloudinary";
import fs from "node:fs";

import config from "../common/config";

export const uploadImage = async (req: Request, res: Response) => {
    try {
        const image = req.file;

        if (!image) {
            res.status(httpStatus.BAD_REQUEST).send('No image provided');
            return;
        }

        cloudinary.v2.config({
            api_key: config.CLOUDINARY_API_KEY,
            api_secret: config.CLOUDINARY_SECRET,
        });

        const uploadResponse = await cloudinary.v2.uploader.upload(image.path);

        fs.unlinkSync(image.path);

        res.status(httpStatus.CREATED).send(uploadResponse);
    } catch (error) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
    }
}
