//extra to store chat title stored




// import projectModel from "../models/Project.js";
// import * as projectService from "../services/project.service.js";
// import { ExpressValidator, validationResult } from "express-validator";
// import userModel from "../models/User.js";

// export const createProject=async(req,res)=>{
//     const error=validationResult(req);

//     if(!error.isEmpty()){
//         return res.status(400).json({error:error.array()});
//     }

//     try{
//         const {name}=req.body;
//         const loggedInUser=await userModel.findOne({
//             email:req.user.email
//         })
//         const userId=loggedInUser._id;
        
//         const newProject=await projectService.createProject({name,userId});
        
//         res.status(200).json(newProject);

//     }catch(err){
//         console.log(err);
//         res.status(400).json({
//             error:err.message,
//         })
//     }
// }

// export const getAllProject=async(req,res)=>{
//     try{   
//         console.log("In");
//         const loggedInUser=await userModel.findOne({
//             email:req.user.email
//         })  
//         console.log("In");

//         const allUserProjects=await projectService.getAllProjectByUserId({userId:loggedInUser._id})

//         return res.status(200).json({projects:allUserProjects})
  
//     }catch(err){
//         console.log(err);   
//         res.status(400).json({error:err.message});  
//     }               
// }

// export const addUserToProject=async(req,res)=>{ 

//     const error=validationResult(req);

//     if(!error.isEmpty())
//     {
//         return res.status(400).json({"err":error.array()}); 
//     }

//     try{
//         const {projectId,users}=req.body;
        
//         const loggedInUser=await userModel.findOne({
//             email:req.user.email,
//         })
        
//         const project=await projectService.addUsersToProject({
//             users,
//             projectId,
//             userId:loggedInUser._id,
//         })

//         return res.status(200).json({project:project})

//     }catch(err){
//         return res.status(400).json({"error":err});
//     }
// }

// export const getProjectById=async(req,res)=>{
//     const {projectId}=req.params;
    
//     try{
//         const project=await projectService.getProjectById({
//             projectId 
//         })
//         return res.status(200).json({project})
//     }catch(err){
//         return res.status(400).json({error:err});
//     }
// }