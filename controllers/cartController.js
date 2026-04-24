import { getCartDb, getCartByIdDb, insertCartDb } from "../models/cartDb.js"

// Get carts - works for both authenticated and anonymous users
const getCartCon = async (req, res) => {
    try {
        // Get user_id from JWT token (authenticated) or query params/body (anonymous)
        const user_id = req.user?.user_id || req.query?.user_id || req.body?.user_id

        if (!user_id) {
            return res.status(400).json({ error: "user_id is required" })
        }

        const carts = await getCartDb(user_id)
        res.json({ cart: carts })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

// Create new cart - works for both authenticated and anonymous users
const insertCartCon = async (req, res) => {
    try {
        // Get user_id from JWT token (authenticated) or request body (anonymous)
        const user_id = req.user?.user_id || req.body?.user_id

        if (!user_id) {
            return res.status(400).json({ error: "user_id is required" })
        }

        await insertCartDb(user_id)
        const carts = await getCartDb(user_id)
        res.json({ cart: carts })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export { getCartCon, insertCartCon }
