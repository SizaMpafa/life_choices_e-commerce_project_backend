import { deleteCartItemDb, getCartItemsDb, insertCartItemDb, updateCartItemDb } from "../models/cartItemsDb.js"
const getCartItemsCon = async (req, res) => {
    res.json({cart_items: await getCartItemsDb()})
}
const insertCartItemCon = async (req, res) => {
    let {quantity, cart_id, item_id, item_variant_id} = req.body
    await insertCartItemDb(quantity, cart_id, item_id, item_variant_id)
    res.json({cart_items: await getCartItemsDb()})
}

const updateCartItemCon = async (req, res) => {
    let {cart_item_id} = req.params
    let updates = req.body
    await updateCartItemDb(cart_item_id, updates)
    res.json({cart_items: await getCartItemsDb()})
}

const deleteCartItemCon = async (req, res) => {
    let {cart_item_id} = req.params
    await deleteCartItemDb(cart_item_id)
    res.json({cart_items: await getCartItemsDb()})
}
export {getCartItemsCon, insertCartItemCon, updateCartItemCon, deleteCartItemCon}

