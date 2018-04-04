const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const port = 5050;

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(port, () => {
    console.log(`app is live on port ${port}`);
});