import express from "express"

import { deletePaymentMethodCon, getPaymentMethodsCon, insertPaymentMethodCon, updatePaymentMethodCon } from "../controllers/paymentMethodscontroller.js";

const router = express.Router()

router.get('/', getPaymentMethodsCon);
router.post('/', insertPaymentMethodCon);
router.patch('/:payment_method_id', updatePaymentMethodCon);
router.delete('/:payment_method_id', deletePaymentMethodCon);
export default router
