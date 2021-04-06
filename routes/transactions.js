const express = require('express')
const router = express.Router();
const { addTransaction, getTransactions, deleteTransaction, getTransactionsById, updateTransaction } = require('../controllers/transactions');

router
    .route('/')
    .get(getTransactions)
    .post(addTransaction)

router
    .route('/:id')
    .delete(deleteTransaction)
    .get(getTransactionsById)
    .put(updateTransaction)

module.exports = router;
