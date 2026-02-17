import { pool } from "../config/config.js"

const getBankingDetailsDb = async () => {
    let [data] = await pool.query('SELECT * FROM banking_details')
    return data
}
const insertBankingDetailDb = async (
card_handler, card_number, expiry_month, expiry_year, user_id, cvv, billing_address
) => {
  const [data] = await pool.query(
    `INSERT INTO banking_details (card_handler, card_number, expiry_month, expiry_year, user_id, cvv, billing_address) VALUES (?, ?, ?, ?, ?, ?, ?);`,
    [card_handler, card_number, expiry_month, expiry_year, user_id, cvv, billing_address]
  )
  return data
}

const updateBankingDetailDb = async (banking_detail_id, updates) => {
  const fields = []
  const values = []

  
    if (updates.card_handler) {
      fields.push("card_handler = ?")
      values.push(updates.card_handler)
    }
    if (updates.card_number) {
        fields.push("card_number = ?")
        values.push(updates.card_number)
    }
    if (updates.expiry_month) {
        fields.push("expiry_month = ?")
        values.push(updates.expiry_month)
    }
    if (updates.expiry_year) {
      fields.push("expiry_year = ?")
      values.push(updates.expiry_year)
    }
    if (updates.user_id) {
      fields.push("user_id = ?")
      values.push(updates.user_id)
    }
    if (updates.cvv) {
      fields.push("cvv = ?")
      values.push(updates.cvv)
    }
    if (updates.billing_address) {
      fields.push("billing_address = ?")
      values.push(updates.billing_address)
    }

  if (fields.length === 0) return

  values.push(banking_detail_id)

  const query =  `
    UPDATE banking_details 
    SET ${fields.join(", ")} 
    WHERE (banking_detail_id = ?);
    `
  await pool.query(query, values)
}

const deleteBankingDetailDb = async (banking_detail_id) =>{
    let [data] = await pool.query('DELETE FROM `banking_details` WHERE (`banking_detail_id` = ?);', [banking_detail_id])
    return data
}

export {getBankingDetailsDb, insertBankingDetailDb, updateBankingDetailDb, deleteBankingDetailDb}