import { pool } from "../config/config.js"

const getOrdersDb = async () => {
    let [data] = await pool.query('SELECT * FROM orders')
    return data
}
const insertOrderDb = async (
  user_id, 
  status, 
  total_price, 
  delivery_status
) => {
  const [data] = await pool.query(
    `INSERT INTO orders (user_id, status, total_price, delivery_status) VALUES (?, ?, ?, ?);`,
    [user_id, status, total_price, delivery_status]
  )
  return data
}


const updateOrderDb = async (order_id, updates) => {
  const fields = []
  const values = []

  if (updates.user_id) {
    fields.push("user_id = ?")
    values.push(updates.user_id)
  }

  if (updates.status) {
    fields.push("status = ?")
    values.push(updates.status)
  }
  if (updates.total_price) {
    fields.push("total_price = ?")
    values.push(updates.total_price)
  }

  if (updates.delivery_status) {
    fields.push("delivery_status = ?")
    values.push(updates.delivery_status)
  }

  if (fields.length === 0) return

  values.push(order_id)

  const query =  `
    UPDATE orders 
    SET ${fields.join(", ")} 
    WHERE (order_id = ?);
    `
  await pool.query(query, values)
}

const deleteOrderDb = async (order_id) =>{
    let [data] = await pool.query('DELETE FROM `orders` WHERE (`order_id` = ?);', [order_id])
    return data
}

export {getOrdersDb, insertOrderDb, updateOrderDb, deleteOrderDb}