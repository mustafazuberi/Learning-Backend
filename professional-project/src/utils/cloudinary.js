import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  if (!localFilePath) {
    return null;
  }

  try {
    // Upload an image on cloudinary
    const uploadResult = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    return uploadResult;
  } catch (error) {
    fs.unlinkSync(localFilePath); // Delete the local file if upload fails
    console.log("Error uploading to Cloudinary:", error.message);
    throw new Error("Failed to upload image to Cloudinary");
  }
};

export { uploadOnCloudinary };
