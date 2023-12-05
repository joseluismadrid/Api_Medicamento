const {response} = require('express')
const medicamentos = require('../models/medicamento')

const getMedicamento=async(req,res)=>{
    const medicamento = await medicamentos.find()
    res.json({
        msg: medicamento
    })
}
const postMedicamento =async(req,res)=>{
    const info = req.body
    let mensaje = 'Insercion exitosa'
    try {
        const medicamento = new medicamentos(info) //Instanciar el objeto
        await medicamento.save() //Guardar en la base de dato
        console.log(medicamento)
    } catch (error) {
        mensaje = error
        console.log(error)
    }
    res.json({
        msg: mensaje
    })
}
const putMedicamento =async(req,res)=>{
    const {idMedicamento,nombre,stock,medicion,gramaje}=req.body
    let mensaje ='actualizacion Exitosa'
    try{
        const medicamento = await medicamentos.findOneAndUpdate({idMedicamento:idMedicamento},{nombre:nombre,stock:stock,medicion:medicion,gramaje:gramaje});
        
    }catch(error){
        mensaje= error
        console.log(error)
    }
    res.json({
        msg:mensaje
    })
}
const deleteMedicamento = async(req,res)=>{
    const {idMedicamento}=req.body
    let mensaje= ''
    try{
        const medicamento = await medicamentos.findOneAndDelete({idMedicamento})
        mensaje ='Eliminacion exitosa'
    }catch(error){
        mensaje= error
        console.log(error)
    }res.json({
        msg:mensaje
    })
}

module.exports = {
    getMedicamento,
    postMedicamento,
    putMedicamento,
    deleteMedicamento
}