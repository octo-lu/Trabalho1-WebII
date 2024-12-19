
import app from './src/app.js'
import dotenv from 'dotenv'
dotenv.config({ path: '.env' });

//app.use(express.json())

//const fs = require('fs')

//PORTA DA API

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor escutando na porta ${PORT}` )
})



