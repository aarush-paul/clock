const express = require('express');
const app = express();
const server = require('http').Server(app);
server.listen(1000);

app.get('/', (req, res) => {
    res.redirect(`/index.html`);
});