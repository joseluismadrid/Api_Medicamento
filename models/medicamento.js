const {Schema, model} = require('mongoose')

const MedicamentoSchema =({
    idMedicamento:{
        type:String,
        unique:true,
        required:[true, 'El id es requerido']

    },
    nombre:{
        type:String,
        unique:true,
        required:[true, 'El nombre es requerido ']
    },
    stock:{
        type:String,
        required:[true, 'El Stock es requeridod'],
        min:[1, 'El Stock debe contener mínimo 1 caracteres'],
        max:[10, 'El Stock debe contener máximo 10 caracteres']
    },
    medicion:{
        type:String,
        required:[
            true,'La medicion es requerida'
        ]
    },
    gramaje:{
        type:String,
        required:[
            true, 'El Gramaje es requerido'
        ]
    }




})
module.exports =model('medicamento',MedicamentoSchema)