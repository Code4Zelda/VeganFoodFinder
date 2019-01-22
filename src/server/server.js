const express = require('express')
const app = express();
const path = require('path');
const db = require("./elephantsql");
const bodyParser = require('body-parser')
const PORT = 3000;

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.json());

// app.get('/index.html', (req, res) => {
//     res.setHeader('Content-Type', 'text/html');
//     res.sendFile(path.join(__dirname, './../index.html'));

//     res.status(200)
//     // send('Hello World');
// })

app.get('/venice', (req, res) => {
    const queryString = "SELECT * FROM venice";

    db.any(queryString)

        .then(data => {
            console.log(data)
            res.status(200).json(data)
        }

        ).catch(err => res.status(500).json({ error: err.message }))

})

app.get('/dtla', (req, res) => {
    const queryString = "SELECT * FROM dtla";

    db.any(queryString)

        .then(data => {
            console.log(data)
            res.status(200).json(data)
        }

        ).catch(err => res.status(500).json({ error: err.message }))

})




app.listen(PORT, () => console.log(`listening on port ${PORT}`));