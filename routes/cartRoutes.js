import express from "express"

import { getCartCon, insertCartCon } from "../controllers/cartController.js";


const router = express.Router()

router.get('/', getCartCon);
router.post('/', insertCartCon);

export default router
