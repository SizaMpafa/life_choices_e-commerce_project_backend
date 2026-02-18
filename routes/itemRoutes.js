import express from "express"
import {
  getItemsCon,
  insertItemCon,
  updateItemCon,
  deleteItemCon
} from "../controllers/itemsController.js"

const router = express.Router()

router.get("/", getItemsCon)
router.post("/", insertItemCon)
router.patch("/:item_id", updateItemCon)
router.delete("/:item_id", deleteItemCon)

export default router
