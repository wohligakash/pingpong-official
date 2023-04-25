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
   
app.get('/', (req,res) => {
    res.send("Proper Prior Planning Prevents Poor Performance")
})

app.get('/ping', (req,res) => {
    res.json({ Response: "Pong" })
})

app.listen(7654,() => {
    console.log("Server is running on localhost:7654")
})