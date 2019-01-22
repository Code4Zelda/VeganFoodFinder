const pgp = require('pg-promise')();
//or native libpq bindings
//var pg = require('pg').native


// connect to the dotenv file
const dotenv = require('dotenv');
dotenv.config();

const db = pgp(process.env.POSTGRES_URL);

db.connect(function (err) {
    if (err) {
        return console.error('could not connect to postgres', err);
    }
});


module.exports = db;