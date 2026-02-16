import { pool } from "../config/config.js"

const getOrderItemsDb = async () => {
    let [data] = await pool.query('SELECT * FROM order_items')
    return data
}
const insertOrderItemDb = async (
  order_id, 
  item_id, 
  item_variant_id,
  quantity, price
) => {
  const [data] = await pool.query(
    `INSERT INTO order_items (order_id, item_id, item_variant_id, quantity, price) VALUES (?, ?, ?, ?, ?);`,
    [order_id, item_id, item_variant_id, quantity, price]
  )
  return data
}


const updateOrderItemDb = async (order_item_id, updates) => {
  const fields = []
  const values = []

  if (updates.order_id) {
    fields.push("order_id = ?")
    values.push(updates.order_id)
  }

  if (updates.item_id) {
    fields.push("item_id = ?")
    values.push(updates.item_id)
  }
  if (updates.item_variant_id) {
    fields.push("item_variant_id = ?")
    values.push(updates.item_variant_id)
  }

  if (updates.quantity) {
    fields.push("quantity = ?")
    values.push(updates.quantity)
  }
  if (updates.price) {
    fields.push("price = ?")
    values.push(updates.price)
  }

  if (fields.length === 0) return

  values.push(order_item_id)

  const query =  `
    UPDATE order_items 
    SET ${fields.join(", ")} 
    WHERE (order_item_id = ?);
    `
  await pool.query(query, values)
}

const deleteOrderItemDb = async (order_item_id) =>{
    let [data] = await pool.query('DELETE FROM `order_items` WHERE (`order_item_id` = ?);', [order_item_id])
    return data
}

export {getOrderItemsDb, insertOrderItemDb, updateOrderItemDb, deleteOrderItemDb}