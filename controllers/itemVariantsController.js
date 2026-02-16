import { deleteItemVariantDb, getItemVariantsDb, insertItemVariantDb, updateItemVariantDb } from "../models/itemVariantsDb.js"
const getItemVariantsCon = async (req, res) => {
    res.json({item_variants: await getItemVariantsDb()})
}
const insertItemVariantCon = async (req, res) => {
    let {size, color, stock, item_id} = req.body
    await insertItemVariantDb(size, color, stock, item_id)
    res.json({item_variants: await getItemVariantsDb()})
}

const updateItemVariantCon = async (req, res) => {
    let {item_variant_id} = req.params
    let updates = req.body
    await updateItemVariantDb(item_variant_id, updates)
    res.json({item_variants: await getItemVariantsDb()})
}

const deleteItemVariantCon = async (req, res) => {
    let {item_variant_id} = req.params
    await deleteItemVariantDb(item_variant_id)
    res.json({item_variants: await getItemVariantsDb()})
}
export {getItemVariantsCon, insertItemVariantCon, updateItemVariantCon, deleteItemVariantCon}

