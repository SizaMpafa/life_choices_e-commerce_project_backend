import { getPaymentsDb, insertPaymentDb } from "../models/paymentsDb"

const getPaymentsCon = async (req, res) => {
    res.json({payments: await getPaymentsDb()})
}
const insertPaymentCon = async (req, res) => {
    let {amount, payment_method_id, status, transaction_id, order_id} = req.body
    await insertPaymentDb(amount, payment_method_id, status, transaction_id, order_id)
    res.json({payments: await getPaymentsDb()})
}

export {getPaymentsCon, insertPaymentCon}

