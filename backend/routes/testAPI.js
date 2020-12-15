const express = require("express");
const router = express.Router();

const { Client } = require('pg');

const client = new Client ({
    user: 'postgres',
    host: 'localhost',
    database: 'sentiment_analysis',
    password: 'Chester123',
    port: 5432,
});

client.connect();

const query = `SELECT * FROM Users WHERE Username = 'test';`;
var result = "";

client.query(query, (err, res) => {
    if(err) {
        console.error(err);
        return;
    }
    for(let row of res.rows) {
        result = row;
    }
});

module.exports = router.get("/", function(req, res, next) {
    console.log(result);
    res.send(result);
});