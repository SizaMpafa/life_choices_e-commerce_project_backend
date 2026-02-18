import express from 'express'
import cors from 'cors'
import userRoutes from "./routes/userRoutes.js"
import itemRoutes from "./routes/itemRoutes.js"
import categoryRoutes from "./routes/categoryRoutes.js"
import companyRoutes from "./routes/companyRoutes.js"
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

app.use("/items", itemRoutes)
app.use("/categories", categoryRoutes)
app.use("/companies", companyRoutes)


app.get('/item_variants', getItemVariantsCon);
app.post('/item_variants', insertItemVariantCon);
app.patch('/item_variants/:item_variant_id', updateItemVariantCon);
app.delete('/item_variants/:item_variant_id', deleteItemVariantCon);
app.get('/orders', getOrdersCon);
app.post('/orders', insertOrderCon);
app.patch('/orders/:order_id', updateOrderCon);
app.delete('/orders/:order_id', deleteOrderCon);
app.get('/order_items', getOrderItemsCon);
app.post('/order_items', insertOrderItemCon);
app.patch('/order_items/:order_item_id', updateOrderItemCon);
app.delete('/order_items/:order_item_id', deleteOrderItemCon);
app.get('/payments', getPaymentsCon);
app.post('/payments', insertPaymentCon)
app.get('/cart', getCartCon);
app.post('/cart', insertCartCon);
app.get('/payment_methods', getPaymentMethodsCon);
app.post('/payment_methods', insertPaymentMethodCon);
app.patch('/payment_methods/:payment_method_id', updatePaymentMethodCon);
app.delete('/payment_methods/:payment_method_id', deletePaymentMethodCon);
app.get('/cart_items', getCartItemsCon);
app.post('/cart_items', insertCartItemCon);
app.patch('/cart_items/:cart_item_id', updateCartItemCon);
app.delete('/cart_items/:cart_item_id', deleteCartItemCon);
app.get('/addresses', getAddressesCon);
app.post('/adresses', insertAddressCon);
app.patch('/addresses/:adress_id', updateAddressCon);
app.delete('/adresses/:adress_id', deleteAddressCon);
app.get('/bankingDetails', getBankingDetailsCon);
app.post('bankingDetails', insertBankingDetailCon);
app.patch('/bankingDetails/:banking_detail_id', updateBankingDetailcon);
app.delete('/bankingDetails/:banking_detail_id', deleteBankingDetailCon);
app.use("/users", userRoutes)
app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})