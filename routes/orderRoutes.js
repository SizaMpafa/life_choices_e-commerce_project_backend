import express from "express"
import { deleteOrderCon, getOrdersCon, insertOrderCon, updateOrderCon } from "../controllers/ordersController.js";


const router = express.Router()

router.get('/', getOrdersCon);
router.post('/', insertOrderCon);
router.patch('/:order_id', updateOrderCon);
router.delete('/:order_id', deleteOrderCon);

export default router
