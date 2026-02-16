import { deleteOrderDb, getOrdersDb, insertOrderDb, updateOrderDb } from "../models/ordersDb.js"

const getOrdersCon = async (req, res) => {
    res.json({orders: await getOrdersDb()})
}
const insertOrderCon = async (req, res) => {
    let {user_id, status, total_price, delivery_status} = req.body
    await insertOrderDb(user_id, status, total_price, delivery_status)
    res.json({orders: await getOrdersDb()})
}

const updateOrderCon = async (req, res) => {
    let {order_id} = req.params
    let updates = req.body
    await updateOrderDb(order_id, updates)
    res.json({orders: await getOrdersDb()})
}

const deleteOrderCon = async (req, res) => {
    let {order_id} = req.params
    await deleteOrderDb(order_id)
    res.json({orders: await getOrdersDb()})
}
export {getOrdersCon, insertOrderCon, updateOrderCon, deleteOrderCon}

