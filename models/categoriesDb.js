import { pool } from "../config/config.js"

const getCategoriesDb = async () => {
    let [data] = await pool.query('SELECT * FROM categories;')
    return data
}

const insertCategoryDb = async (name) => {
  const [data] = await pool.query(
    `INSERT INTO categories (name) VALUES (?);`,
    [name]
  )
  return data
}
const updateCategoryDb = async (category_id, name) => {
  const [data] = await pool.query(`UPDATE categories SET name = ? WHERE (category_id = ?);`,[category_id, name]
  )
  return data
}
const deleteCategoryDb = async (category_id) =>{
    let [data] = await pool.query('DELETE FROM `categories` WHERE (`category_id` = ?);', [category_id])
    return data
}

export {getCategoriesDb, insertCategoryDb, updateCategoryDb, deleteCategoryDb}