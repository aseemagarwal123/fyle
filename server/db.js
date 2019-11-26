// db.js
const { Client } = require('pg');

const client = new Client({
  connectionString:process.env.DATABASE_URL,
  ssl: true,
});

client.connect().then((d)=>{
console.log('postgres connected')

});
//postgres://hekgtrihsegliv:637b110c5282d55babc730f376ae50a81be42798ead926f4c8ed42db1503d859@ec2-107-22-253-158.compute-1.amazonaws.com:5432/d5qua9egs8nscc?sslmode=disable

exports.client = client;
