const express = require('express');
const cookieSession = require('cookie-session');
const main = require('./pages/main').default;

const app = express();

app.use(cookieSession({
    name: 'session',
    keys: ['secreat'],
    // Cookie Options
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
}));

app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded());

app.get('/', main.controller);
app.post('/addUser', main.addUser);
app.post('/clear', main.clear);


app.listen(3000, () => console.log("app is running on port 3000"));
