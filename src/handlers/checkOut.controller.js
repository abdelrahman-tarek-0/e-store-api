const checkOutModel = require('../models/checkOut.model.js')
const { resBuilder } = require('../helpers/res_builder.js')
const CheckOutModel = new checkOutModel()

const checkOut = async (req, res, next) => {
    try {
        const cart = await CheckOutModel.checkOut(req.body.user_id)
        res.json(resBuilder(cart))
        return
    } catch (error) {
        next(error)
    }
}

module.exports = {checkOut}