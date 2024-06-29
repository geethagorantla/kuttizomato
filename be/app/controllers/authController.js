const authService =require('../services/authService')

exports.register=async(req,res)=>{
    try{
        const user=await authService.register(req.body)
        res.status(201).json(user)

    }catch(err){
        res.status(400).json({message:err.message})
    }
}


exports.login=async(req,res)=>{
    try{
       const {username,password}=req.body
       const {user,token}=await authService.login(username,password) 
       res.status(200).json({errcode :"-1",message:"Login Successfull",errMsg:[[{user:user}],[{token:token}]]})

    }catch(err){
        res.status(400).json({ message: err.message });
    }
}