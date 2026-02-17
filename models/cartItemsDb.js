import { pool } from "../config/config.js"

const getCartItemsDb = async () => {
    let [data] = await pool.query('SELECT * FROM cart_items')
    return data
}
const insertCartItemDb = async (
  quantity,
  cart_id,
  item_id, 
  item_variant_id
) => {
  const [data] = await pool.query(
    `INSERT INTO cart_items (quantity, cart_id, item_id, item_variant_id) VALUES (?, ?, ?, ?);`,
    [quantity, cart_id, item_id, item_variant_id]
  )
  return data
}


const updateCartItemDb = async (cart_item_id, updates) => {
  const fields = []
  const values = []

  if (updates.quantity) {
    fields.push("quantity = ?")
    values.push(updates.quantity)
  }

  if (updates.cart_id) {
    fields.push("cart_id = ?")
    values.push(updates.cart_id)
  }
  if (updates.item_id) {
    fields.push("item_id = ?")
    values.push(updates.item_id)
  }

  if (updates.item_variant_id) {
    fields.push("item_variant_id = ?")
    values.push(updates.item_variant_id)
  }

  if (fields.length === 0) return

  values.push(cart_item_id)

  const query =  `
    UPDATE cart_items 
    SET ${fields.join(", ")} 
    WHERE (cart_item_id = ?);
    `
  await pool.query(query, values)
}

const deleteCartItemDb = async (cart_item_id) =>{
    let [data] = await pool.query('DELETE FROM `cart_items` WHERE (`cart_item_id` = ?);', [cart_item_id])
    return data
}

export {getCartItemsDb, insertCartItemDb, updateCartItemDb, deleteCartItemDb}