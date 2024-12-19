import express from 'express'
import scheduleController from '../controllers/scheduleController.js'

const routes = express.Router()

routes.get("/schedule", scheduleController.listarSchedule)
routes.get("/schedule/:id", scheduleController.listarscheduleById)
routes.post("/schedule", scheduleController.cadastrarschedule)
routes.put("/schedule/:id", scheduleController.patchschedule)
routes.delete("/schedule/:id", scheduleController.deleteschedule)

export default routes