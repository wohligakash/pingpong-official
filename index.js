const bodyParser = require('body-parser');
// const { response } = require('express');
// const { response } = require('express');
const express = require('express');
const app = expres();
// app.use(bodyParser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

function calculateSum(a, b) {
var sum = a + b;
    return sum;
}

var result = calculateSum(2, 3);
console.log(result);
   
app.get('/', (req,res) => {
    res.send("Proper Prior Planning Prevents Poor Performance")
})

app.get('/ping', (req,res) => {
    res.json({ Response: "Pong" })
})

app.listen(8070,() => {
    console.log("Sample log!!")
})