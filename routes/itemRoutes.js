import express from "express"
import upload from "../middleware/uploadMiddleware.js"
import {
  getItemsCon,
  insertItemCon,
  updateItemCon,
  deleteItemCon
} from "../controllers/itemsController.js"
import { verifyToken } from "../middleware/authMiddleware.js"
import { requireAdmin } from "../middleware/roleMiddleware.js"

const router = express.Router()

router.get("/", getItemsCon)

router.post("/", verifyToken, requireAdmin, upload.single("photo"), insertItemCon)
router.patch("/:item_id", verifyToken, requireAdmin, upload.single("photo"), updateItemCon)
router.delete("/:item_id", verifyToken, requireAdmin, deleteItemCon)

export default router
