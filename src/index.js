const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
console.log(process.env);

app.listen(80, () => {
    console.log('Server Launch', 80);
});