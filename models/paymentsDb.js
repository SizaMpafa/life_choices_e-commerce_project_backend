import { pool } from "../config/config.js"

const getPaymentsDb = async () => {
    let [data] = await pool.query('SELECT * FROM payments')
    return data
}
const insertPaymentDb = async (amount, payment_method_id, status, transaction_id, order_id) => {
  const [data] = await pool.query(
    `INSERT INTO items (amount, payment_method_id,status, transaction_id, order_id) VALUES (?, ?, ?, ?, ?);`,
    [amount, payment_method_id, status, transaction_id, order_id]
  )
  return data
}

export {getPaymentsDb, insertPaymentDb}