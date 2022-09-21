const express = require('express');
const app = express();

const fortunes = require('./fortunes.json');

app.get('/fortunes', (req, res) => {
    res.json(fortunes)
})

app.listen(3000, 'localhost', () => console.log("server starting"));