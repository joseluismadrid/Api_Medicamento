const {Router} = require('express')

const route = Router()

const {getMedicamento, postMedicamento, putMedicamento, deleteMedicamento} = require('../controller/medicamento') //Importando el controlador

route.get('/', getMedicamento)

route.post('/', postMedicamento)

route.put('/', putMedicamento)

route.delete('/', deleteMedicamento)

module.exports = route