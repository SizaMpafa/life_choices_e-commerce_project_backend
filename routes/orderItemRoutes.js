import express from "express"
import { deleteOrderItemCon, getOrderItemsCon, insertOrderItemCon, updateOrderItemCon } from "../controllers/orderItemsController.js";


const router = express.Router()

router.get('/', getOrderItemsCon);
router.post('/', insertOrderItemCon);
router.patch('/:order_item_id', updateOrderItemCon);
router.delete('/:order_item_id', deleteOrderItemCon);

export default router
