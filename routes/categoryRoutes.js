import express from "express"
import {
  getCategoriesCon,
  insertCategoryCon,
  updateCategoryCon,
  deleteCategoryCon
} from "../controllers/categoriesController.js"
import { verifyToken } from "../middleware/authMiddleware.js"
import { requireAdmin } from "../middleware/roleMiddleware.js"

const router = express.Router()

router.get("/", getCategoriesCon)
router.post("/", verifyToken, requireAdmin, insertCategoryCon)
router.patch("/:category_id", verifyToken, requireAdmin, updateCategoryCon)
router.delete("/:category_id", deleteCategoryCon)

export default router
