import express from "express"
import { registerUserCon, loginUserCon } from "../controllers/userController.js"

const router = express.Router()

router.post("/register", registerUserCon)
router.post("/login", loginUserCon)

export default router
