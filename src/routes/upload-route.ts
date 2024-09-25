import { Router } from "express";
import upload from "../middleware/upload";
import { uploadImage } from "../controllers/upload-controllers";
import { uploadROUTE } from "../utils/mocks-images";


const uploadIMG: Router = Router(); 

uploadIMG.post(
    uploadROUTE.UPLOAD, 
    upload.single('image'),
    uploadImage
)

export default uploadIMG;