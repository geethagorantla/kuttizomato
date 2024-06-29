const jwt=require('jsonwebtoken')
const config=require('../config/config')


exports.authenticate=(req,res,next)=>{
    const token=req.header('Authorization').replace('Bearer ','')
    if(!token){
        return res.status(401).json({message:'Access denied. No token provided.'})
    }
    try{
        const decoaded=jwt.verify(token,config.jwt.secret)
        req.user=decoaded
        next();

    }
    catch(error){
        res.status(400).json({message:'Invalid token.'})
    }
}