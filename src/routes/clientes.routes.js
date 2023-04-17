import { Router } from 'express'
import { getCliente, postCliente, patchCliente, deleteCliente } from '../controllers/clientes.controllers.js'

const router = Router()

router.get('/cliente',getCliente )

router.post('/clientes', postCliente)

router.patch('/cliente/:id', patchCliente)

router.delete('/cliente/:id', deleteCliente)


export default router