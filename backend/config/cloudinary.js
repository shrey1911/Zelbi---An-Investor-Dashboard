import cloudinary from "cloudinary";

export const cloudinaryConnect = () => {
    cloudinary.config({
        cloud_name: process.env.CLOUD_NAME,
        api_key: process.env.API_KEY,
        api_secret: process.env.API_SECRET,
    });

    console.log("✅ Cloudinary Connected Successfully!");
};
