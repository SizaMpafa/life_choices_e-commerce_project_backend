import { deleteAddressDb, getAddressesDb, insertAddressDb, updateAddressDb } from "../models/addressesDb.js"

const getAddressesCon = async (req, res) => {
    res.json({addresses: await getAddressesDb()})
}
const insertAddressCon = async (req, res) => {
    let {street, city, postal_code, country, user_id} = req.body
    await insertAddressDb(street, city, postal_code, country, user_id)
    res.json({addresses: await getAddressesDb()})
}

const updateAddressCon = async (req, res) => {
    let {address_id} = req.params
    let updates = req.body
    await updateAddressDb(address_id, updates)
    res.json({addresses: await getAddressesDb()})
}

const deleteAddressCon = async (req, res) => {
    let {address_id} = req.params
    await deleteAddressDb(address_id)
    res.json({addresses: await getAddressesDb()})
}
export {getAddressesCon, insertAddressCon, updateAddressCon, deleteAddressCon}

