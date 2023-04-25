const bodyParser = require('body-parser');
const express = require('express');
const app = express();
app.use(bodyParser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
   
app.get('/', (req,res) => {
    res.send("Proper Prior Planning Prevents Poor Performance")
})

app.get('/ping', (req,res) => {
    res.json({ Response: "Pong" })
})

app.listen(7654,() => {
    console.log("10 % Luck, 20% skill, 15% concentrated power of will, 5% pleasure, 50% pain")
    console.log("100% reason to Remember the name!!!!")
})