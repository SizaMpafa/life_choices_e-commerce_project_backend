import express from "express"
import {
  getCategoriesCon,
  insertCategoryCon,
  updateCategoryCon,
  deleteCategoryCon
} from "../controllers/categoriesController.js"

const router = express.Router()

router.get("/", getCategoriesCon)
router.post("/", insertCategoryCon)
router.patch("/:category_id", updateCategoryCon)
router.delete("/:category_id", deleteCategoryCon)

export default router
