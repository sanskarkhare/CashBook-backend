const Transaction = require('../models/Transactions.js');

exports.getTransactions = async(req, res, next) => {
    try {
        const transactions = await Transaction.find();

        return res.status(200).json({
            success: true,
            data: transactions,
            count: transactions.length
        })
    } catch(err) {
        return res.status(500).json({
            success: false,
            error: 'server error'
        })
    }
}

exports.addTransaction = async(req, res, next) => {
    try{
            const { remark, amount } = req.body;

        const transaction = await Transaction.create(req.body);

        return res.status(201).json({
            success: true,
            data: transaction
        })
    }
    catch(err) {
        if(err.name === 'ValidationError'){
            const messages = Object.values(err.errors).map(val => val.message);

            return res.status(400).json({
                success: false,
                data: messages,
            })
        }
        else {
            console.log(err);
            return res.status(400).json({
                success: false,
                data: 'server error'
            })
        }
    }
}