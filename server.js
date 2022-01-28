const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const mysql = require('mysql2');

//middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


const db = mysql.createConnection(
    {
        host: 'localhost',
        // Your MySQL username,
        user: 'root',
        //Your MySQL password
        password: '1nnd90MR$!',
        database: 'election'
    },
    console.log('Connected to the elction database')
);

db.query(`SELECT * FROM candidates`, (err, rows) => {
    console.log(rows);
  });

app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
