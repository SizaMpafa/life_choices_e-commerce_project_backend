import { deleteBankingDetailDb, getBankingDetailsDb, insertBankingDetailDb, updateBankingDetailDb } from "../models/bankingDetailsDb.js"

const getBankingDetailsCon = async (req, res) => {
    res.json({banking_details: await getBankingDetailsDb()})
}
const insertBankingDetailCon = async (req, res) => {
    let {card_handler, card_number, expiry_month, expiry_year, user_id, cvv, billing_address} = req.body
    await insertBankingDetailDb(card_handler, card_number, expiry_month, expiry_year, user_id, cvv, billing_address)
    res.json({banking_details: await getBankingDetailsDb()})
}

const updateBankingDetailcon = async (req, res) => {
    let {banking_detail_id} = req.params
    let updates = req.body
    await updateBankingDetailDb(banking_detail_id, updates)
    res.json({banking_details: await getBankingDetailsDb()})
}

const deleteBankingDetailCon = async (req, res) => {
    let {banking_detail_id} = req.params
    await deleteBankingDetailDb(banking_detail_id)
    res.json({banking_details: await getBankingDetailsDb()})
}
export {getBankingDetailsCon, insertBankingDetailCon, updateBankingDetailcon, deleteBankingDetailCon}

