'use strict';
const { app } = require('./server.js');

app.get('/', (reg, res) => {
    res.send("Hello World!");
});
