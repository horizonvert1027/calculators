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
const https =  require('https');
const fs =  require('fs');
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
// app.use((req, res, next) => {
//     const cfConnectingIP = req.headers['cf-connecting-ip'];
//     const cfIPCountry = req.headers['cf-ipcountry'];
  
//     // Check if the request is coming from Cloudflare
//     if (cfConnectingIP && cfIPCountry) {
//       // Request is from Cloudflare, proceed with the next middleware
//       next();
//     } else {
//       // Request is not from Cloudflare, return an error or redirect
//       res.status(403).send('Forbidden');
//     }
// });
calculators.forEach(route => {
    app.get('/' + route, (req, res) => {
        res.sendFile(path.join(__dirname, route, 'index.html'));
    })

    app.get('/embed/' + route, (req, res) => {
        res.sendFile(path.join(__dirname, route, 'index.html'));
    })    
});
// const options = {
//     key: fs.readFileSync('sizecalc.key'),
//     cert: fs.readFileSync('sizecalc.pem'),
// };
  
// const server = https.createServer(options, app);

// const PORT = 443;

// server.listen(port, () => {
//     console.log(`Server running on https://your-ip-address:${PORT}`);
// });
app.listen(port, () => {
    console.log('Server is running at port 3000');
})