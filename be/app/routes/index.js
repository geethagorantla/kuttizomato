const express=require('express')
const authRoues=require('./auth.routes')

const router = express.Router();


router.use('/auth',authRoues)


module.exports=router