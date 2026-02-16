import { pool } from "../config/config.js"

const getCartDb = async () => {
    let [data] = await pool.query('SELECT * FROM cart')
    return data
}
const insertCartDb = async (user_id) => {
  const [data] = await pool.query(
    `INSERT INTO cart (user_id) VALUES (?);`, [user_id]
  )
  return data
}

export {getCartDb, insertCartDb}