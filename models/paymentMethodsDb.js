import { pool } from "../config/config.js"

const getPaymentMethodsDb = async () => {
    let [data] = await pool.query('SELECT * FROM payment_methods')
    return data
}
const insertPaymentMethodDb = async (
payment_type, paypal_email, banking_detail_id, user_id
) => {
  const [data] = await pool.query(
    `INSERT INTO payment_methods (payment_type, paypal_email, banking_detail_id, user_id) VALUES (?, ?, ?, ?);`,
    [payment_type, paypal_email, banking_detail_id, user_id]
  )
  return data
}

const updatePaymentMethodDb = async (payment_method_id, updates) => {
  const fields = []
  const values = []

  
    if (updates.payment_type) {
      fields.push("payment_type = ?")
      values.push(updates.payment_type)
    }
    if (updates.paypal_email) {
        fields.push("paypal_email = ?")
        values.push(updates.paypal_email)
    }
    
    if (updates.banking_detail_id) {
        fields.push("banking_detail_id = ?")
        values.push(updates.banking_detail_id)
    }
    if (updates.user_id) {
      fields.push("user_id = ?")
      values.push(updates.user_id)
    }

  if (fields.length === 0) return

  values.push(payment_method_id)

  const query =  `
    UPDATE payment_methods 
    SET ${fields.join(", ")} 
    WHERE (payment_method_id = ?);
    `
  await pool.query(query, values)
}

const deletePaymentMethodDb = async (payment_method_id) =>{
    let [data] = await pool.query('DELETE FROM `payment_methods` WHERE (`payment_method_id` = ?);', [payment_method_id])
    return data
}

export {getPaymentMethodsDb, insertPaymentMethodDb, updatePaymentMethodDb, deletePaymentMethodDb}