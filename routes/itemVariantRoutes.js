import express from "express"
import { deleteItemVariantCon, getItemVariantsCon, insertItemVariantCon, updateItemVariantCon } from "../controllers/itemVariantsController";


const router = express.Router()

router.get('/', getItemVariantsCon);
router.post('/', insertItemVariantCon);
router.patch('/:item_variant_id', updateItemVariantCon);
router.delete('/:item_variant_id', deleteItemVariantCon);

export default router
