const jwt = require('jsonwebtoken');
const config = require('../config/config');
const User=require('../models/User')

exports.register = async (userData) => {
    const user = new User(userData);
    await user.save();
    return user;
};

exports.login=async(username,password)=>{
    const user=await User.findOne({username})
    if(!user){
        throw new Error('User not found')
    }

    const isMatch=await user.comparePassword(password)

    if(!isMatch){
        throw new Error('Invalid credentials');
    }

    const payload = { userId: user._id };
    const secretKey = process.env.JWT_SECRET;
    const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });
    return { user,token };
}



