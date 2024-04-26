import express from "express";
//import controllers here....

import { signUp , getAllUsers, deleteUser} from "../controllers/userControllers.js";


const userRoutes=express.Router();

userRoutes.post("/signup", signUp); //using this opration we can do both (create and update);
userRoutes.get("/allusers", getAllUsers); // through this operation we can get all user data;
userRoutes.get("/deleteuser/:id", deleteUser ) // we can delete existing user;


export default userRoutes;