import express from "express"
import { registerUserCon, loginUserCon, getProfileCon } from "../controllers/userController.js"
import { verifyToken } from "../middleware/authMiddleware.js"

const router = express.Router()

router.get("/profile", verifyToken, getProfileCon)
router.post("/register", registerUserCon)
router.post("/login", loginUserCon)

export default router
