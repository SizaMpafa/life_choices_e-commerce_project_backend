import { deleteCartItemDb, getCartItemsDb, getCartItemDb, insertCartItemDb, updateCartItemDb } from "../models/cartItemsDb.js"
import { getCartByIdDb } from "../models/cartDb.js"

// Get items in user's cart ONLY
const getCartItemsCon = async (req, res) => {
    try {
        const { cart_id } = req.query
        
        if (!cart_id) {
            return res.status(400).json({ error: "cart_id is required" })
        }

        // Verify user owns this cart (check JWT token OR anonymous user_id from query/body)
        const cart = await getCartByIdDb(cart_id)
        const userId = req.user?.user_id || req.query?.user_id || req.body?.user_id
        
        if (!cart || String(cart.user_id) !== String(userId)) {
            return res.status(403).json({ error: "Unauthorized" })
        }

        const cartItems = await getCartItemsDb(cart_id)
        res.json({ cart_items: cartItems })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

// Add item to cart
const insertCartItemCon = async (req, res) => {
    try {
        let { quantity, cart_id, item_id, item_variant_id, user_id } = req.body

        // Validate inputs
        if (!cart_id || !item_id || !quantity) {
            return res.status(400).json({ error: "Missing required fields: cart_id, item_id, quantity" })
        }

        // Get actual user_id (from JWT token or request body for anonymous)
        const actualUserId = req.user?.user_id || user_id
        if (!actualUserId) {
            return res.status(400).json({ error: "user_id is required" })
        }

        // Verify user owns this cart
        const cart = await getCartByIdDb(cart_id)
        if (!cart || String(cart.user_id) !== String(actualUserId)) {
            return res.status(403).json({ error: "Unauthorized" })
        }

        await insertCartItemDb(quantity, cart_id, item_id, item_variant_id)
        const cartItems = await getCartItemsDb(cart_id)
        res.json({ cart_items: cartItems })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

// Update cart item quantity
const updateCartItemCon = async (req, res) => {
    try {
        let { cart_item_id } = req.params
        let updates = req.body

        // Get the cart item to verify ownership
        const cartItem = await getCartItemDb(cart_item_id)
        if (!cartItem) {
            return res.status(404).json({ error: "Cart item not found" })
        }

        // Get actual user_id (from JWT token or request body for anonymous)
        const actualUserId = req.user?.user_id || req.body?.user_id
        if (!actualUserId) {
            return res.status(400).json({ error: "user_id is required" })
        }

        // Verify user owns this cart
        const cart = await getCartByIdDb(cartItem.cart_id)
        if (!cart || String(cart.user_id) !== String(actualUserId)) {
            return res.status(403).json({ error: "Unauthorized" })
        }

        await updateCartItemDb(cart_item_id, updates)
        const cartItems = await getCartItemsDb(cartItem.cart_id)
        res.json({ cart_items: cartItems })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

// Delete cart item
const deleteCartItemCon = async (req, res) => {
    try {
        let { cart_item_id } = req.params

        // Get the cart item to verify ownership
        const cartItem = await getCartItemDb(cart_item_id)
        if (!cartItem) {
            return res.status(404).json({ error: "Cart item not found" })
        }

        // Get actual user_id (from JWT token or request body for anonymous)
        const actualUserId = req.user?.user_id || req.body?.user_id
        if (!actualUserId) {
            return res.status(400).json({ error: "user_id is required" })
        }

        // Verify user owns this cart
        const cart = await getCartByIdDb(cartItem.cart_id)
        if (!cart || String(cart.user_id) !== String(actualUserId)) {
            return res.status(403).json({ error: "Unauthorized" })
        }

        await deleteCartItemDb(cart_item_id)
        const cartItems = await getCartItemsDb(cartItem.cart_id)
        res.json({ cart_items: cartItems })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export { getCartItemsCon, insertCartItemCon, updateCartItemCon, deleteCartItemCon }
