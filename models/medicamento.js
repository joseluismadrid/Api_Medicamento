const {Schema, model} = require('mongoose')

const MedicamentoSchema =({
    idMedicamento:{
        type:Number,
        unique:true,
        required:[true, 'El id es requerido']

    },
    nombre:{
        type:String,       
        required:[true, 'El nombre es requerido ']
    },
    stock:{
        type:Number,
        required:[true, 'El Stock es requeridod'],
        min:[1, 'El Stock debe contener mínimo 1 caracteres'],
        max:[3, 'El Stock debe contener máximo 10 caracteres']
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
   




})
module.exports =model('medicamento',MedicamentoSchema)