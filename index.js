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
import { deleteCategoryCon, getCategoriesCon, insertCategoryCon, updateCategoryCon } from './controllers/categoriesController.js';
import { deleteItemCon, getItemsCon, insertItemCon, updateItemCon } from './controllers/itemsController.js';
import { deleteCompanyCon, getCompaniesCon, insertCompanyCon, updateCompanyCon } from './controllers/companiesController.js';
import { deleteItemVariantCon, getItemVariantsCon, insertItemVariantCon, updateItemVariantCon } from './controllers/itemVariantsController.js';
import { deleteOrderCon, getOrdersCon, insertOrderCon, updateOrderCon } from './controllers/ordersController.js';
import { deleteOrderItemCon, getOrderItemsCon, insertOrderItemCon, updateOrderItemCon } from './controllers/orderItemsController.js';
import { getPaymentsCon, insertPaymentCon } from './controllers/paymentscontroller.js';
import { getCartCon, insertCartCon } from './controllers/cartController.js';
import { deleteCartItemCon, getCartItemsCon, insertCartItemCon, updateCartItemCon } from './controllers/cartItemsController.js';
import { deletePaymentMethodCon, getPaymentMethodsCon, insertPaymentMethodCon, updatePaymentMethodCon } from './controllers/paymentMethodscontroller.js';
import { deleteAddressCon, getAddressesCon, insertAddressCon, updateAddressCon } from './controllers/adressesController.js';
import { deleteBankingDetailCon, getBankingDetailsCon, insertBankingDetailCon, updateBankingDetailcon } from './controllers/bankingDetailscontroller.js';

const app = express();
app.use(cors()) //cross origin resource sharing 
app.use(express.json())
const port = 5490

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