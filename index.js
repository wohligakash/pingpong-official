const bodyParser = require("body-parser");
const express = require("express");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

let calculateSum = (a, b, c) => {
const sum = a + b + c;
    return sum;
}

const result = calculateSum(2, 3, 5);
console.log(result);
   
app.get('/', (req,res) => {
    res.send("Proper Prior Planning Prevents Poor Performance")
})

app.get('/ping', (req,res) => {
    res.json({ Response: "Pong" })
})

app.listen(8070,() => {
    console.log("IMPOSSIBLE - I M POSSIBLE")
})