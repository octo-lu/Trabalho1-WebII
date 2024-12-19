import express from "express"
import userController from "../controllers/userController.js";

const routes = express.Router()

routes.get("/user", userController.listaruser)
routes.get("/user/:id", userController.listaruserById)
routes.post("/user", userController.cadastraruser)
routes.put("/user/:id", userController.patchuser)
routes.delete("/user/:id", userController.deleteuser)
routes.post("/userEmail", userController.login)


export default routes




