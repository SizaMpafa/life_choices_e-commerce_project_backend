import express from "express"
import { deleteCompanyCon, getCompaniesCon, getCompanyCon, insertCompanyCon, updateCompanyCon } from "../controllers/companiesController.js";
import { verifyToken } from "../middleware/authMiddleware.js";
import { requireAdmin } from "../middleware/roleMiddleware.js";

const router = express.Router()

router.get('/', getCompaniesCon);
router.get('/:company_id', getCompanyCon);
router.post('/', verifyToken, requireAdmin, insertCompanyCon);
router.patch('/:company_id', verifyToken, requireAdmin, updateCompanyCon);
router.delete('/:company_id', verifyToken, requireAdmin, deleteCompanyCon);

export default router
