import express from 'express';
import dbConnect from './config/db.js'
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from "dotenv";
import userRoutes from "./routes/User.js";
import fileUpload from "express-fileupload";
import profileRoutes from "./routes/Profile.js";
import {cloudinaryConnect} from "./config/cloudinary.js";
import aiRoutes from "./routes/Ai.js";
//import projectRoutes from "./routes/Project.js";

dotenv.config(); 
dbConnect();
const app=express();
app.use(cors());
cloudinaryConnect();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: "/tmp/",
}));


app.use("/auth", userRoutes);
app.use("/profile", profileRoutes);
app.use('/ai', aiRoutes);
//app.use('/projects', projectRoutes);


app.get('/', (req, res) => {   
  res.send('<h1>Hello</h1>');
});


const PORT=process.env.PORT || 3000;


app.listen(PORT,
    ()=>console.log(`Server Started on ${PORT}`)
)


export default app;