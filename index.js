// Add this to the VERY top of the first file loaded in your app
var apm = require('elastic-apm-node').start({

    // Override the service name from package.json
    // Allowed characters: a-z, A-Z, 0-9, -, _, and space
    serviceName: 'pingpong',
    
    // Use if APM Server requires a secret token
    secretToken: 'eyJhbGciOiJSUzI1NiIsImtpZCI6IlNZX2tCVGIydEhxdU1EQTRYX2F0cHpSX05jMW5NUUhqYVpTQkI2bl8wZGcifQ.eyJpc3MiOiJrdWJlcm5ldGVzL3NlcnZpY2VhY2NvdW50Iiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9uYW1lc3BhY2UiOiJkZWZhdWx0Iiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9zZWNyZXQubmFtZSI6ImFwbS1zZXJ2ZXItMTY4MjY1ODExMC1hcG0tc2VydmVyLXRva2VuLWY2bnc4Iiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9zZXJ2aWNlLWFjY291bnQubmFtZSI6ImFwbS1zZXJ2ZXItMTY4MjY1ODExMC1hcG0tc2VydmVyIiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9zZXJ2aWNlLWFjY291bnQudWlkIjoiODc2NjdjZmEtY2ZmNi00NDFjLWE1MTItMWUwZmExYTMwNWM0Iiwic3ViIjoic3lzdGVtOnNlcnZpY2VhY2NvdW50OmRlZmF1bHQ6YXBtLXNlcnZlci0xNjgyNjU4MTEwLWFwbS1zZXJ2ZXIifQ.vaRs6mVSnzKxOwAqwWlresC_Bt1_3_x--QiuM7F_sNzU9FhpDV_AS3vQx-76xPTKV56EISmuySKESAdgcKF81hsWT0KlhGFZqG4NVsm9AVG4SCgLP_vRUMF5FXH2u7r7kWpsnmFn42SkUUVslvmjKlBex41bfLPKHP4MDrGilFpN5fO6rxYKB7eRT9fvwim1LgfSiZ1koQuVwfpcaN1TYhLsZbyAaMfOr1xqun9vIf0Y9ogcy78mPOHrKbkl3IqLlkxm7TJl89VGiuhlZjY1n5M9bYQztC0wW17m2WnjR5GIZ6TL6U6KsqSG4dH6fL2FG4u_1p_P5sXKayw3kQIvYw',
    
    // Set the custom APM Server URL (default: http://localhost:8200)
    serverUrl: 'http://localhost:8200',
    
    // Set the service environment
    environment: 'production'
    })

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


app.use(apm.middleware.express());

// Capture transactionsnpm ls elastic-apm-node
app.use((req, res, next) => {
  const transaction = apm.startTransaction(req.path, req.method);
  res.on('finish', () => {
    transaction.result = res.statusCode;
    transaction.end();
  });
  next();
});