import dotenv from "dotenv";

dotenv.config();

process.env.NODE_ENV = process.env.NODE_ENV || "development";
process.env.PORT = process.env.PORT || "5000";

export default {
    NODE_ENV: process.env.NODE_ENV as string,

    PORT: parseInt(process.env.PORT, 10),

    CLOUDINARY_URL: process.env.CLOUDINARY_URL as string,
    CLOUDINARY_SECRET: process.env.CLOUDINARY_SECRET as string,
    CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY as string,
};
