const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.contentType('html');
    res.send("<html><head></head><body><h1>Hello from express</h1><h2>By Dharmendra</h2></body>")
})

app.listen(3000, () => console.log("app is running on port 3000"));


/**
 * Run by node app.js
 * or if you have pm2 installed in machine
 * pm2 start app.js (app.js path if not in same folder)
 */