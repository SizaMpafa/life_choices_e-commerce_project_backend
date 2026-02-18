import express from "express"

import { deleteAddressCon, getAddressesCon, insertAddressCon, updateAddressCon } from "../controllers/adressesController.js";

const router = express.Router()

router.get('/', getAddressesCon);
router.post('/', insertAddressCon);
router.patch('/:adress_id', updateAddressCon);
router.delete('/:adress_id', deleteAddressCon);
export default router
