import express from 'express'
import cors from 'cors'
import { deleteCategoryCon, getCategoriesCon, insertCategoryCon, updateCategoryCon } from './controllers/categoriesController.js';
import { deleteItemCon, getItemsCon, insertItemCon, updateItemCon } from './controllers/itemsController.js';
import { deleteCompanyCon, getCompaniesCon, insertCompanyCon, updateCompanyCon } from './controllers/companiesController.js';
import { deleteItemVariantCon, getItemVariantsCon, insertItemVariantCon, updateItemVariantCon } from './controllers/itemVariantsController.js';
import { deleteOrderCon, getOrdersCon, insertOrderCon, updateOrderCon } from './controllers/ordersController.js';
import { deleteOrderItemCon, getOrderItemsCon, insertOrderItemCon, updateOrderItemCon } from './controllers/orderItemsController.js';

const app = express();
app.use(cors()) //cross origin resource sharing 
app.use(express.json())
const port = 5490
app.get('/categories', getCategoriesCon);
app.post('/categories', insertCategoryCon);
app.patch('/categories/:category_id', updateCategoryCon);
app.delete('/categories/:category_id', deleteCategoryCon);
app.get('/items', getItemsCon);
app.post('/items', insertItemCon);
app.patch('/items/:item_id', updateItemCon);
app.delete('/items/:item_id', deleteItemCon);
app.get('/companies', getCompaniesCon);
app.post('/companies', insertCompanyCon);
app.patch('/companies/:company_id', updateCompanyCon);
app.delete('/companies/:company_id', deleteCompanyCon);
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
app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})