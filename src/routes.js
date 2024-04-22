import express from "express"
import create from "./controllers/create.js"
import read from "./controllers/read.js"
import update from "./controllers/update.js"
import deleteOp from "./controllers/delete.js"

const router = express.Router()

router.get("/", read)

export default router