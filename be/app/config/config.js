const dotenv=require('dotenv')
dotenv.config()

module.exports={
db: {
        uri: process.env.DB_URI,
       
},
server: {
    port: process.env.PORT || 3000
},
jwt: {
    secret: process.env.JWT_SECRET 
},
nodeEnv: process.env.NODE_ENV || 'development',
sessionSecret: process.env.SESSION_SECRET || 'default_session_secret',
redisUrl: process.env.REDIS_URL || 'redis://localhost:6379'
}

