import express from 'express'
import cors from 'cors'
import userRoutes from "./routes/userRoutes.js"
import itemRoutes from "./routes/itemRoutes.js"
import categoryRoutes from "./routes/categoryRoutes.js"
import companyRoutes from "./routes/companyRoutes.js"
import itemVariantRoutes from "./routes/itemVariantRoutes.js"
import orderRoutes from "./routes/orderRoutes.js"
import orderItemRoutes from "./routes/orderItemRoutes.js"
import paymentRoutes from "./routes/paymentRoutes.js"
import cartRoutes from "./routes/cartRoutes.js"
import cartItemRoutes from "./routes/cartItemRoutes.js"
import paymentMethodRoutes from "./routes/paymentMethodRoutes.js"
import addressRoutes from "./routes/addressRoutes.js"
import bankingDetailsRoutes from "./routes/bankingDetailsRoutes.js"

const app = express();
app.use(cors()) //cross origin resource sharing 
app.use(express.json())
const port = process.env.PORT || 5490
app.use("/uploads", express.static("uploads"))
app.use("/users", userRoutes)
app.use("/items", itemRoutes)
app.use("/categories", categoryRoutes)
app.use("/companies", companyRoutes)
app.use("/item_variants", itemVariantRoutes)
app.use("/orders", orderRoutes)
app.use("/order_items", orderItemRoutes)
app.use("/payments", paymentRoutes)
app.use("/cart", cartRoutes)
app.use("/cart_items", cartItemRoutes)
app.use("/payment_methods", paymentMethodRoutes)
app.use("/addresses", addressRoutes)
app.use("/banking_details", bankingDetailsRoutes)

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})