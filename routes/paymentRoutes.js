import express from "express"
import { getPaymentsCon, insertPaymentCon } from "../controllers/paymentscontroller.js";


const router = express.Router()

router.get('/', getPaymentsCon);
router.post('/', insertPaymentCon)
export default router
