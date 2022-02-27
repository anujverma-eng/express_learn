const express = require('express');
const path = require('path');
const route = require('./routes/index');
const app = express();

const PORT = process.env.PORT || 3000;

app.set('view engine','ejs');

app.use(express.static('public'));

app.use(route)

app.listen(PORT,()=>{
    console.log(`App is Listening on ${PORT}`);
});