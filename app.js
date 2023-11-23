const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

const calculators = ['gpa-calculator', 'bra-size-calculator'];

app.use(express.static(path.join(__dirname, 'public')));

calculators.forEach(route => {
    app.get('/' + route, (req, res) => {
        res.sendFile(path.join(__dirname, route, 'index.html'));
    })
});

app.listen(port, () => {
    console.log('Server is running at port 3000');
})