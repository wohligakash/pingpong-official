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
    console.log("Server is running on localhost:7654")
})