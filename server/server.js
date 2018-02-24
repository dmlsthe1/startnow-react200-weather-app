const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const axios = require('axios');
dotenv.config();
const app = express();

app.use(morgan('dev'));
app.use(express.static('dist'));
app.use(express.static('public'));

app.get("/weather/:input", (req,res) => {
    const apiKey = process.env.apiKey;
    const input = req.params.input;
    axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${input}&units=imperial&appid=${apiKey}`)
         .then(response => res.send(response.data))
         .catch(err => res.status(500).send("bad"))
})

module.exports = app;
