import { registerUserDb, loginUserDb } from "../models/userDb.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const registerUserCon = async (req, res) => {
  try {
    const { first_name, last_name, email, phone_number, role, password } = req.body

    const hashedPassword = await bcrypt.hash(password, 10)

    await registerUserDb(
      first_name,
      last_name,
      email,
      phone_number,
      role,
      hashedPassword
    )

    res.status(201).json({ message: "User registered successfully" })

  } catch (error) {

    if (error.code === "ER_DUP_ENTRY") {
      return res.status(400).json({ message: "Email already exists" })
    }

    res.status(500).json({ error: error.message })
  }
}

const loginUserCon = async (req, res) => {
  try {
    const { email, password } = req.body

    const user = await loginUserDb(email)

    if (!user) {
      return res.status(400).json({ message: "User not found" })
    }

    const match = await bcrypt.compare(password, user.password)

    if (!match) {
      return res.status(400).json({ message: "Invalid password" })
    }

    const token = jwt.sign(
      { id: user.user_id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "2h" }
    )

    res.json({
      token,
      user: {
        id: user.user_id,
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        role: user.role
      }
    })

  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export { registerUserCon, loginUserCon }
