const mongoose=require('mongoose')
const bcrypt=require('bcrypt')


const userSchema=new mongoose.Schema({
    username:{type:String,required:true,unique:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true,unique:true}
})


userSchema.pre('save',async function(next){
    // Check if the password field is being modified
    if(this.isModified('password') || this.isNew){
        try{
            const salt = await bcrypt.genSalt(10);
            this.password = await bcrypt.hash(this.password, salt);
        }
        catch(error){
            return next(error)
        }
    }
    next();
})

// Method to compare the password for login
userSchema.methods.comparePassword = async function(password) {
    return await bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', userSchema);
module.exports = User;


