import express from "express"

import { deleteBankingDetailCon, getBankingDetailsCon, insertBankingDetailCon, updateBankingDetailcon } from "../controllers/bankingDetailscontroller.js";

const router = express.Router()

router.get('/', getBankingDetailsCon);
router.post('/', insertBankingDetailCon);
router.patch('/:banking_detail_id', updateBankingDetailcon);
router.delete('/:banking_detail_id', deleteBankingDetailCon);
export default router
