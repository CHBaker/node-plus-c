const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.set('view engine', 'hbs');
const hbs = require('hbs');

// import addon (c code)
const addon = require('../../build/Release/obj.target/addon.node');

const port = 5050;

app.get('/', (req, res) => {
    const result = { 'result': addon.hello()}
    res.render('index.hbs', result);
});

app.listen(port, () => {
    console.log(`app is live on port ${port}`);
});
