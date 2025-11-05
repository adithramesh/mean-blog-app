import dotenv from "dotenv"


dotenv.config()

interface Config{
    PORT:number,
    MONGO_URI:string,
    CLOUDINARY_NAME:string,
    CLOUDINARY_API_KEY:string,
    CLOUDINARY_API_SECRET:string,
    JWT_SECRET:string,
    CLIENT_URL:string, 
}


export const config:Config={
    PORT:Number(process.env.PORT),
    MONGO_URI:process.env.MONGO_URI as string,
    CLOUDINARY_NAME:process.env.CLOUDINARY_NAME as string,
    CLOUDINARY_API_KEY:process.env.CLOUDINARY_API_KEY as string,
    CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET as string,
    JWT_SECRET:process.env.JWT_SECRET as string,
    CLIENT_URL:process.env.CLIENT_URL as string 
}


