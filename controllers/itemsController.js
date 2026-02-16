import { deleteItemDb, getItemsDb, insertItemDb, updateItemDb } from "../models/itemsDb.js"

const getItemsCon = async (req, res) => {
    res.json({items: await getItemsDb()})
}
const insertItemCon = async (req, res) => {
    let {name, price, photo, stock, category_id, company_id} = req.body
    await insertItemDb(name, price, photo, stock, category_id, company_id)
    res.json({items: await getItemsDb()})
}

const updateItemCon = async (req, res) => {
    let {item_id} = req.params
    let updates = req.body
    await updateItemDb(item_id, updates)
    res.json({items: await getItemsDb()})
}

const deleteItemCon = async (req, res) => {
    let {item_id} = req.params
    await deleteItemDb(item_id)
    res.json({items: await getItemsDb()})
}
export {getItemsCon, insertItemCon, updateItemCon, deleteItemCon}

