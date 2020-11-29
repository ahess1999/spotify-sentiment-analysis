const { Client } = require('pg');

const client = new Client ({
    user: 'postgres',
    host: 'localhost',
    database: 'sentiment_analysis',
    password: 'Neb75ver',
    port: 5432,
});

console.log("Connected");

client.connect();