const express= require('express');
const path= require('path');

const app= express();

app.use(express.static(path.join(__dirname, 'app')));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/test',(req,res)=>{
    res.sendFile(path.join(__dirname, 'app/registered-test.html'));
});

app.get('/scope',(req,res)=>{
    res.sendFile(path.join(__dirname, 'app/test-scoped.html'));
});

app.listen(8000);