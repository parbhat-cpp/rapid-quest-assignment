import express from 'express';
import multer from "multer";

import { uploadImage } from '../controllers/image.controller';

const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
})
const upload = multer({ storage: storage })

/**
 * Upload image
 */
router.post('/uploadImage', upload.single('image'), uploadImage);

export default router;
