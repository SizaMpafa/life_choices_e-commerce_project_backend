import { pool } from "../config/config.js"

const getAddressesDb = async () => {
    let [data] = await pool.query('SELECT * FROM addresses')
    return data
}
const insertAddressDb = async (
 street, city, postal_code, country, user_id 
) => {
  const [data] = await pool.query(
    `INSERT INTO addresses ( street, city, postal_code, country, user_id ) VALUES (?, ?, ?, ?, ?);`,
    [ street, city, postal_code, country, user_id ]
  )
  return data
}

const updateAddressDb = async (address_id, updates) => {
  const fields = []
  const values = []

  
    if (updates.street) {
      fields.push("street = ?")
      values.push(updates.street)
    }
    if (updates.city) {
        fields.push("city = ?")
        values.push(updates.city)
    }
    if (updates.postal_code) {
        fields.push("postal_code = ?")
        values.push(updates.postal_code)
    }
    if (updates.country) {
      fields.push("country = ?")
      values.push(updates.country)
    }
    if (updates.user_id) {
      fields.push("user_id = ?")
      values.push(updates.user_id)
    }

  if (fields.length === 0) return

  values.push(address_id)

  const query =  `
    UPDATE addresses 
    SET ${fields.join(", ")} 
    WHERE (address_id = ?);
    `
  await pool.query(query, values)
}

const deleteAddressDb = async (address_id) =>{
    let [data] = await pool.query('DELETE FROM `addresses` WHERE (`address_id` = ?);', [address_id])
    return data
}

export {getAddressesDb, insertAddressDb, updateAddressDb, deleteAddressDb}