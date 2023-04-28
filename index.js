var apm = require('elastic-apm-node').start({

    // Override the service name from package.json
    // Allowed characters: a-z, A-Z, 0-9, -, _, and space
    serviceName: 'my-service-name',
  
    // Use if APM Server requires a secret token
    secretToken: '',
  
    // Set the custom APM Server URL (default: http://localhost:8200)
    serverUrl: 'http://localhost:8200',
  
    // Set the service environment
    environment: 'my-environment'
});

const bodyParser = require('body-parser');
const express = require('express');
const app = express();
app.use(bodyParser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
   
// Add this to the VERY top of the first file loaded in your app
  
app.get('/', (req,res) => {
    res.send("Proper Prior Planning Prevents Poor Performance")
    console.log("Hello, Just another wonderful day!!!")
})

app.get('/ping', (req,res) => {
    res.json({ Response: "Pong" })
})

app.listen(7654,() => {
    console.log("10 % Luck, 20% skill, 15% concentrated power of will, 5% pleasure, 50% pain")
    console.log("100% reason to Remember the name!!!!")
})