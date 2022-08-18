const checkOutModel = require('../models/checkOut.model.js')
const { resBuilder } = require('../helpers/res_builder.js')
const CheckOutModel = new checkOutModel()

const checkOut = async (req, res, next) => {
    try {
        const check = await CheckOutModel.checkOut(req.body.user_id)
        res.json(resBuilder(check))
        return
    } catch (error) {
        next(error)
    }
}

module.exports = {checkOut}