import { getCartDb, insertCartDb } from "../models/cartDb.js"
const getCartCon = async (req, res) => {
    res.json({cart: await getCartDb()})
}
const insertCartCon = async (req, res) => {
    let {user_id} = req.body
    await insertCartDb(user_id)
    res.json({cart: await getCartDb()})
}
export {getCartCon, insertCartCon}

