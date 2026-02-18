import express from "express"

import { deleteCartItemCon, getCartItemsCon, insertCartItemCon, updateCartItemCon } from "../controllers/cartItemsController.js";

const router = express.Router()

router.get('/', getCartItemsCon);
router.post('/', insertCartItemCon);
router.patch('/:cart_item_id', updateCartItemCon);
router.delete('/:cart_item_id', deleteCartItemCon);
export default router
