import express from 'express'
import schedule from './scheduleRoutes.js'
import newsLetter from './newsLetterRoutes.js'
import user from './userRoutes.js'

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send('Bem vindo ao node.js')
    })
    app.use(express.json(), schedule, newsLetter, user)
}

export default routes