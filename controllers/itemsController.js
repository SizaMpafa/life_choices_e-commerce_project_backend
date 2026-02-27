import { deleteItemDb, getItemsDb, insertItemDb, updateItemDb } from "../models/itemsDb.js"


const getItemsCon = async (req, res) => {
    res.json({items: await getItemsDb()})
}
const insertItemCon = async (req, res) => {
  let { name, price, stock, category_id, company_id } = req.body

  const photo = req.file
    ? `http://localhost:5490/uploads/${req.file.filename}`
    : "http://localhost:5490/uploads/default.png"

  await insertItemDb(name, price, photo, stock, category_id, company_id)

  res.json({ items: await getItemsDb() })
}

const updateItemCon = async (req, res) => {
  let { item_id } = req.params
  let updates = req.body

  if (req.file) {
    updates.photo = `http://localhost:5490/uploads/${req.file.filename}`
  }

  await updateItemDb(item_id, updates)

  res.json({ items: await getItemsDb() })
}

const deleteItemCon = async (req, res) => {
    let {item_id} = req.params
    await deleteItemDb(item_id)
    res.json({items: await getItemsDb()})
}
export {getItemsCon, insertItemCon, updateItemCon, deleteItemCon}

