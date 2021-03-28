const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
    remark: {
        type: String,
        trim: true,
        required: [true, 'please add remark']
    },

    amount: {
        type: Number,
        required: [true, 'please add amount']
    },

    createdAt: {
        type: Date,
        default: Date.now,
    }

})

module.exports = mongoose.model('Transaction', TransactionSchema);

