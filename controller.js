


// Fibonacci Numbers endpoint
const getFibonacciNumbers = (req, res) => {
    console.log("getting fibanacci numbers " + req.params.number);
    let number1 = 1
    let number = parseInt(req.params.number);
    let number2 = 0;
    let nextNo = 0;
    let arr = [];

    for (let i = 0; i <= number; i++) {
        arr.push(number2);
        nextNo = number1 + number2;
        number2 = number1
        number1 = nextNo;

    }
    res.status(200).json(arr);
}

const getGreatestCommonDivisor = (req, res) => {
    console.log("gettin GCD for :" + req.params.number1 + "&" + req.params.number2);

    const num1 = req.params.number1;
    const num2 = req.params.number2;

    const result = gcd(num1, num2);
    res.status(200).json(result);
}

const gcd = (num1, num2) => {
    if (num2 === 0) {
        return num1;
    }

    return gcd(num2, num1 % num2);
}

module.exports = {
    getFibonacciNumbers,
    getGreatestCommonDivisor
}