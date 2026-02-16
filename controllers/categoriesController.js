import { deleteCategoryDb, getCategoriesDb, insertCategoryDb, updateCategoryDb } from "../models/categoriesDb.js"

const getCategoriesCon = async (req, res) => {
    res.json({categories: await getCategoriesDb()})
}
const insertCategoryCon = async (req, res) => {
    let {name} = req.body
    await insertCategoryDb(name)
    res.json({categories: await getCategoriesDb()})
}

const updateCategoryCon = async (req, res) => {
    let {category_id} = req.params
    let {name} = req.body
    await updateCategoryDb(category_id, name)
    res.json({categories: await getCategoriesDb()})
}

const deleteCategoryCon = async (req, res) => {
    let {category_id} = req.params
    await deleteCategoryDb(category_id)
    res.json({categories: await getCategoriesDb()})
}
export {getCategoriesCon, insertCategoryCon, updateCategoryCon, deleteCategoryCon}

