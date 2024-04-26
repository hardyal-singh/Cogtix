import { UserModel } from "../model/userSchema.js";



const signUp =async(req, res)=>{
    const {name, email, city, password, mainEmail}=req.body;
    console.log(req.body)
    console.log(name)
    
    try {
        if(email && mainEmail){
            const newUser=await UserModel.updateOne({email:mainEmail},{$set:{name, city, password, email}})
            if(newUser) return res.status(200).json({message:"update successfully"})
        }

        const user= await UserModel.findOne({email});
        if(user) return res.status(400).json({message:"this email is already used"})
        
        const newUser=await UserModel.create({name, email, password, city});
        if(newUser) return res.status(200).json({message:"User account created successfully"})

    } catch (error) {
        res.status(400).json({message:e})
    }}

const getAllUsers=async(req, res)=>{
    const allUsers=await UserModel.find();

    console.log(allUsers)
    if(allUsers) return res.status(200).json({status:"ok", user:allUsers});

    return res.status(400).json({message:"unable to find user"})
}

const deleteUser=async(req, res)=>{
    const {id}=req.params;
    if(id){
        const response= await UserModel.deleteOne({email:id})
        if(response) return res.status(200).json({status:"ok"})
    }
}
export {signUp, getAllUsers, deleteUser}