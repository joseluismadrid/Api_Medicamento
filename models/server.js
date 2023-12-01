const express = require('express')
const cors = require ('cors')
const body = require ('body-parser')
const { dbConection } = require('../database/config')


class Server{

    constructor(){
        this.app=express()
        this.port=process.env.PORT
        this.medicamentoPath= '/medicamento'
        this.middlewares()
        this.routes()
        this.conectarDB()
    }
    listen(){
        this.app.listen(
            this.port,()=>{
                console.log('Escuchando por el puerto'+this.port)
            }
            
        )
    }
    routes(){
         this.app.use(this.medicamentoPath,require('../routes/medicamentos'))       
    }
    middlewares(){
        this.app.use(cors()),
        this.app.use(body.json())
    }
    async conectarDB(){
        await dbConection()
    }
}
module.exports = {Server}