const express = require('express')
const router = express.Router();
const { addTransaction, getTransactions } = require('../controllers/transactions');

router
    .route('/')
    .get(getTransactions)
    .post(addTransaction)

module.exports = router;
