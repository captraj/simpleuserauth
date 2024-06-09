const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get(':name', (req, res) => {
    res.send(`Hello, ${req.params.name}!`);
});

app.get('/json', (req, res) => {
    res.json({ message: 'Hello, World!' });
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});