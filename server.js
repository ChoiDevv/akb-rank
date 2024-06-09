const express = require('express');
const app = express();
const port = 3000;

app.get('/test', (req, res) => {
    res.send('akb-rank test');
});

const admin = require('./router/admin');
const record = require('./router/record');
const user = require('./router/user');

app.use('/admin', admin);
app.use('/record', record);
app.use('/user', user);

app.listen(port, () => {
    console.log(`akb-web listening at http://localhost:${port}`);
});
