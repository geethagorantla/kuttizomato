const mongoose=require('mongoose')
const config=require('./config')


const connectdb=async()=>{
    try{
        await mongoose.connect(config.db.uri,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('Database connected successfully');

    }catch{
        console.error('Database connection failed:', error.message);
        process.exit(1); // Exit process with failure
    }
}

module.exports=connectdb