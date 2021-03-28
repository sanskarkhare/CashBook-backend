const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./config/db');
const cors = require('cors');

dotenv.config({ path: './config/config.env' });

connectDB();

const transactions = require('./routes/transactions')

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.use('/', transactions);

const PORT = 5000;

app.listen(PORT, () => {
    console.log('listening at 5000');
})