const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.json({
        message: 'hello world'
    })
})


const PORT = 5000;

app.listen(PORT, () => {
    console.log('listening at 5000');
})