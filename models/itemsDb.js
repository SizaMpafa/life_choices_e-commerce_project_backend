import { pool } from "../config/config.js"

const getItemsDb = async () => {
    let [data] = await pool.query('SELECT * FROM items')
    return data
}
const insertItemDb = async (
  name, 
  price, 
  photo, 
  stock, 
  category_id, 
  company_id
) => {
  const [data] = await pool.query(
    `INSERT INTO items (name, price, photo, stock, category_id, company_id) VALUES (?, ?, ?, ?, ?, ?);`,
    [name, price, photo, stock, category_id, company_id]
  )
  return data
}


const updateItemDb = async (item_id, updates) => {
  const fields = []
  const values = []

  if (updates.name) {
    fields.push("name = ?")
    values.push(updates.name)
  }

  if (updates.price) {
    fields.push("price = ?")
    values.push(updates.price)
  }
  if (updates.photo) {
    fields.push("photo = ?")
    values.push(updates.photo)
  }

  if (updates.stock) {
    fields.push("stock = ?")
    values.push(updates.stock)
  }
  if (updates.category_id) {
    fields.push("category_id = ?")
    values.push(updates.category_id)
  }

  if (updates.company_id) {
    fields.push("company_id = ?")
    values.push(updates.company_id)
  }


  if (fields.length === 0) return

  values.push(item_id)

  const query =  `
    UPDATE items 
    SET ${fields.join(", ")} 
    WHERE (item_id = ?);
    `
  await pool.query(query, values)
}

const deleteItemDb = async (item_id) =>{
    let [data] = await pool.query('DELETE FROM `items` WHERE (`item_id` = ?);', [item_id])
    return data
}

export {getItemsDb, insertItemDb, updateItemDb, deleteItemDb}