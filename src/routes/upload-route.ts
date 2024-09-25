import { Router } from "express";
import upload from "../middleware/upload";
import { uploadROUTE } from "../utils/mocks-images";
import { uploadImage } from "../controllers/upload-controllers";


const uploadIMG: Router = Router(); 

uploadIMG.post(
    uploadROUTE.UPLOAD, 
    upload.single('image'),
    uploadImage
)

export default uploadIMG;
