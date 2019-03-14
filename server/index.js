const express = require('express');
const path = require('path');
const http=require('http');
const app = express();


app.use(express.static(path.join(__dirname, '../client')))

app.get('/', function(req, res) {
    res.sendfile(path.join(__dirname, '../client/index.html'));
});


app.listen(8001);
