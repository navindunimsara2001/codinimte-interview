const express = require('express');
const { getFibonacciNumbers, getGreatestCommonDivisor } = require('./controller');

const app = express();

app.use('/api/fibonacci/:number',getFibonacciNumbers);
app.use('/api/gcd/:number1/:number2', getGreatestCommonDivisor);


app.listen(5000, () => {
    console.log("Server is runing on port 5000");
})