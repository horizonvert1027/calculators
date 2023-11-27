//    ,     #_
//    ~\_  ####_
//   ~~  \_#####\
//   ~~     \###|
//   ~~       \#/ ___  
//    ~~       V~' '->
//     ~~~         /
//       ~~._.   _/
//          _/ _/
//        _/m/'
const express = require('express');
const path = require('path');
const cors =  require('cors');
const app = express();
const port = 3000;

const calculators = [
    'gpa-calculator',
    'tip-calculator',
    'bac-calculator',
    'average-calculator',
    'mixed-number-calculator',
    'bra-size-calculator',
    'mortgage-calculator',
    'bmi-calculator',
    'grade-calculator',
    'percentage-calculator'
];
app.use(cors("*"));
const publicPath = path.resolve(__dirname, 'public', 'assets');

app.use(express.static(path.join(__dirname, 'public')));
app.use('/embed/:name/assets', express.static(publicPath));
app.use('/:name/assets', express.static(publicPath));

calculators.forEach(route => {
    app.get('/' + route, (req, res) => {
        res.sendFile(path.join(__dirname, route, 'index.html'));
    })

    app.get('/embed/' + route, (req, res) => {
        res.sendFile(path.join(__dirname, route, 'index.html'));
    })    
});
const privateKey = fs.readFileSync('key.key', 'utf8');
const certificate = fs.readFileSync('cert.cert', 'utf8');
const credentials = { key: privateKey, cert: certificate };

// Create an HTTPS server
const httpsServer = https.createServer(credentials, app);

// Start the server
httpsServer.listen(port, () => {
  console.log(`Server is running on https://localhost:${port}`);
});
// app.listen(port, () => {
//     console.log('Server is running at port 3000');
// })