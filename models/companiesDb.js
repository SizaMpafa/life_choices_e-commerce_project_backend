import { pool } from "../config/config.js"

const getCompaniesDb = async () => {
    let [data] = await pool.query('SELECT * FROM companies')
    return data
}
const insertCompanyDb = async (
  name, 
  logo, 
  longitude, 
  latitude
) => {
  const [data] = await pool.query(
    `INSERT INTO companies (name, logo, longitude, latitude) VALUES (?, ?, ?, ?);`,
    [name, logo, longitude, latitude]
  )
  return data
}


const updateCompanyDb = async (company_id, updates) => {
  const fields = []
  const values = []

  if (updates.name) {
    fields.push("name = ?")
    values.push(updates.name)
  }

  if (updates.logo) {
    fields.push("logo = ?")
    values.push(updates.logo)
  }
  if (updates.longitude) {
    fields.push("longitude = ?")
    values.push(updates.longitude)
  }

  if (updates.latitude) {
    fields.push("latitude = ?")
    values.push(updates.latitude)
  }

  if (fields.length === 0) return

  values.push(company_id)

  const query =  `
    UPDATE items 
    SET ${fields.join(", ")} 
    WHERE (company_id = ?);
    `
  await pool.query(query, values)
}

const deleteCompanyDb = async (company_id) =>{
    let [data] = await pool.query('DELETE FROM `companies` WHERE (`company_id` = ?);', [company_id])
    return data
}

export {getCompaniesDb, insertCompanyDb, updateCompanyDb, deleteCompanyDb}