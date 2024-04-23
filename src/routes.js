import express from "express"
import create from "./controllers/create.js"
import read from "./controllers/read.js"
import readById from "./controllers/readByid.js"
import update from "./controllers/update.js"
import deleteOp from "./controllers/delete.js"

const router = express.Router()

router.get("/users", read)
router.get("/users/:id", readById)
router.post("/users", create)


export default router