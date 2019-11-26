// db.js
const { Client } = require('pg');

const client = new Client({
  connectionString:process.env.DATABASE_URL,
  ssl: true,
});

client.connect().then((d)=>{
console.log('postgres connected')

});

exports.client = client;
