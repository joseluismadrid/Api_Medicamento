const {Schema, model} = require('mongoose')

const MedicamentoSchema =({
    nombre:{
        type:String,       
        required:[true, 'El nombre es requerido '],
    },
    stock:{
        type:Number,
        required:[true, 'El Stock es requeridod'],
       
    },
    medicion:{
        type:String,
        required:[
            true,'La medicion es requerida'
        ]
    },
    Numerogramaje:{
        type:Number,
        required:[
            true, 'El Numero de Gramaje es requerido'
        ]
    },
    gramaje:{
        type:String,
        required:[
            true, 'El Gramaje es requerido'
        ]
    },
    text3:{
        type:String,
        required:[true,'Ingresa el text3 por requerimiento']
    }
   




})
module.exports =model('medicamento',MedicamentoSchema)