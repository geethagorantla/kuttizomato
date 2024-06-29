const express=require('express')
const bodyParser=require("body-parser")
const connectDB=require('./app/config/db')
const startServer=require('./app/config/server')
const routes=require('./app/routes')


const app = express();

// Middleware
app.use(bodyParser.json());

app.use('/api',routes)

const initializeApp =async()=>{
    try{
        await connectDB();
        startServer(app);

    }
    catch(error){
        console.error('Initialization failed:', error.message);
        process.exit(1); // Exit process with failure

    }
}
initializeApp(); // Call the initialization function
    
module.exports = app;

