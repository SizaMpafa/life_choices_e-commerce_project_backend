import express from "express"
import { getCartCon, insertCartCon } from "../controllers/cartController.js"

const router = express.Router()

// Public routes (allow anonymous users)
router.get('/', getCartCon)
router.post('/', insertCartCon)

export default router
