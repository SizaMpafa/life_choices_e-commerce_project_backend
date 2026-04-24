import { pool } from "../config/config.js"

// Get ALL carts for a specific user (filtered)
const getCartDb = async (user_id) => {
    let [data] = await pool.query('SELECT * FROM cart WHERE user_id = ?', [user_id])
    return data
}

// Get single cart by ID
const getCartByIdDb = async (cart_id) => {
    let [data] = await pool.query('SELECT * FROM cart WHERE cart_id = ?', [cart_id])
    return data[0] || null
}

// Create new cart
const insertCartDb = async (user_id) => {
  const [data] = await pool.query(
    `INSERT INTO cart (user_id) VALUES (?);`, [user_id]
  )
  return data
}

export { getCartDb, getCartByIdDb, insertCartDb }
