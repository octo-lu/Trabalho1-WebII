import express from 'express'
import databaseConnect from './db/dbConnect.js'
import cors from 'cors'
import routes from './routes/index.js'

const app = express()

//middleware cors utilizado para permitir o uso de recursos em origens distintas
app.use(cors())

routes(app)

const connection = await databaseConnect()

connection.on("erro", (erro) => {
    console.log(erro)
})

connection.once("open", () => {
    console.log("conexao com o banco de dados feita com sucesso")
})


export default app;