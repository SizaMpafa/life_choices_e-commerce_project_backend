import { deleteCompanyDb, getCompaniesDb, insertCompanyDb, updateCompanyDb } from "../models/companiesDb.js"
const getCompaniesCon = async (req, res) => {
    res.json({companies: await getCompaniesDb()})
}
const insertCompanyCon = async (req, res) => {
    let {name, logo, longitude, latitude} = req.body
    await insertCompanyDb(name, logo, longitude, latitude)
    res.json({companies: await getCompaniesDb()})
}

const updateCompanyCon = async (req, res) => {
    let {company_id} = req.params
    let updates = req.body
    await updateCompanyDb(company_id, updates)
    res.json({companies: await getCompaniesDb()})
}

const deleteCompanyCon = async (req, res) => {
    let {company_id} = req.params
    await deleteCompanyDb(company_id)
    res.json({companies: await getCompaniesDb()})
}
export {getCompaniesCon, insertCompanyCon, updateCompanyCon, deleteCompanyCon}

