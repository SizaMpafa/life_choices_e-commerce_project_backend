import { deletePaymentMethodDb, getPaymentMethodsDb, insertPaymentMethodDb, updatePaymentMethodDb } from "../models/paymentMethodsDb.js"

const getPaymentMethodsCon = async (req, res) => {
    res.json({payment_methods: await getPaymentMethodsDb()})
}
const insertPaymentMethodCon = async (req, res) => {
    let {payment_type, paypal_email, banking_detail_id, user_id} = req.body
    await insertPaymentMethodDb(payment_type, paypal_email, banking_detail_id, user_id)
    res.json({payment_methods: await getPaymentMethodsDb()})
}

const updatePaymentMethodCon = async (req, res) => {
    let {payment_method_id} = req.params
    let updates = req.body
    await updatePaymentMethodDb(payment_method_id, updates)
    res.json({payment_methods: await getPaymentMethodsDb()})
}

const deletePaymentMethodCon = async (req, res) => {
    let {payment_method_id} = req.params
    await deletePaymentMethodDb(payment_method_id)
    res.json({payment_methods: await getPaymentMethodsDb()})
}
export {getPaymentMethodsCon, insertPaymentMethodCon, updatePaymentMethodCon, deletePaymentMethodCon}

