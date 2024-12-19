import express from "express"
import newsLetterController from "../controllers/newsLetterController.js";

const routes = express.Router()

routes.get("/newsLetter", newsLetterController.listarnewsLetter)
routes.get("/newsLetter/:id", newsLetterController.listarnewsLetterById)
routes.post("/newsLetter", newsLetterController.cadastrarnewsLetter)
routes.put("/newsLetter/:id", newsLetterController.patchnewsLetter)
routes.delete("/newsLetter/:id", newsLetterController.deletenewsLetter)

export default routes




