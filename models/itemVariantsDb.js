import { pool } from "../config/config.js"

const getItemVariantsDb = async () => {
    let [data] = await pool.query('SELECT * FROM item_variants')
    return data
}
const insertItemVariantDb = async (
  size,
  color,
  stock, 
  item_id
) => {
  const [data] = await pool.query(
    `INSERT INTO item_variants (size, color, stock, item_id) VALUES (?, ?, ?, ?);`,
    [size, color, stock, item_id]
  )
  return data
}


const updateItemVariantDb = async (item_variant_id, updates) => {
  const fields = []
  const values = []

  if (updates.size) {
    fields.push("size = ?")
    values.push(updates.size)
  }

  if (updates.size) {
    fields.push("size = ?")
    values.push(updates.size)
  }
  if (updates.color) {
    fields.push("color = ?")
    values.push(updates.color)
  }

  if (updates.stock) {
    fields.push("stock = ?")
    values.push(updates.stock)
  }
  if (updates.item_id) {
    fields.push("item_id = ?")
    values.push(updates.item_id)
  }

  if (fields.length === 0) return

  values.push(item_variant_id)

  const query =  `
    UPDATE item_variants 
    SET ${fields.join(", ")} 
    WHERE (item_variant_id = ?);
    `
  await pool.query(query, values)
}

const deleteItemVariantDb = async (item_variant_id) =>{
    let [data] = await pool.query('DELETE FROM `item_variants` WHERE (`item_variant_id` = ?);', [item_variant_id])
    return data
}

export {getItemVariantsDb, insertItemVariantDb, updateItemVariantDb, deleteItemVariantDb}