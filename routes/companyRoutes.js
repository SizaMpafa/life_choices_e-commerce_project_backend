import express from "express"
import { deleteCompanyCon, getCompaniesCon, insertCompanyCon, updateCompanyCon } from "../controllers/companiesController.js";

const router = express.Router()

router.get('/', getCompaniesCon);
router.post('/', insertCompanyCon);
router.patch('/:company_id', updateCompanyCon);
router.delete('/:company_id', deleteCompanyCon);

export default router
