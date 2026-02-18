import { pool } from "../config/config.js"

const registerUserDb = async (
  first_name, 
  last_name, 
  email, 
  phone_number, 
  role, 
  hashedPassword
) => {
  const [data] = await pool.query(
    `INSERT INTO users (first_name, last_name, email, phone_number, role, password) VALUES (?, ?, ?, ?, ?, ?);`,
    [first_name, last_name, email, phone_number, role, hashedPassword]
  )
  return data
}

const loginUserDb = async(email) =>{
    let [data] = await pool.query('SELECT * FROM users WHERE email = ?', [email])
    return data[0]
}
export{registerUserDb, loginUserDb}