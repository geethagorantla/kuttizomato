const config=require('./config')

const startServer=(app)=>{
    const port=config.server.port
    app.listen(port,()=>{
        console.log(`Server running on port ${port}`)
    })
}

module.exports = startServer;