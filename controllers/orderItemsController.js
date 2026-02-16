import { deleteOrderItemDb, getOrderItemsDb, insertOrderItemDb, updateOrderItemDb } from "../models/orderItemsDb.js"

const getOrderItemsCon = async (req, res) => {
    res.json({orderItems: await getOrderItemsDb()})
}
const insertOrderItemCon = async (req, res) => {
    let {order_id, item_id, item_variant_id, quantity, price} = req.body
    await insertOrderItemDb(order_id, item_id, item_variant_id, quantity, price)
    res.json({orderItems: await getOrderItemsDb()})
}

const updateOrderItemCon = async (req, res) => {
    let {order_item_id} = req.params
    let updates = req.body
    await updateOrderItemDb(order_item_id, updates)
    res.json({orderItems: await getOrderItemsDb()})
}

const deleteOrderItemCon = async (req, res) => {
    let {order_item_id} = req.params
    await deleteOrderItemDb(order_item_id)
    res.json({orderItems: await getOrderItemsDb()})
}
export {getOrderItemsCon, insertOrderItemCon, updateOrderItemCon, deleteOrderItemCon}

