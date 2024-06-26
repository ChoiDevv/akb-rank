const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config();
const port = process.env.SERVER_PORT;


app.get('/test', (req, res) => {
    res.send('akb-rank test');
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/images', express.static(path.join(__dirname, 'images')));

const admin = require('./router/admin');
const record = require('./router/record');
const user = require('./router/user');
const main = require('./router/main');

app.use('/admin', admin);
app.use('/record', record);
app.use('/user', user);
app.use('/', main);

app.listen(port, () => {
    console.log(`akb-web listening at http://localhost:${port}`);
});
