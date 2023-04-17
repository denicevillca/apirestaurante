import express from "express"
import clienteRoutes from './routes/clientes.routes.js'
const app = express()

app.use(express.json())
app.use('/api',clienteRoutes)


export default app