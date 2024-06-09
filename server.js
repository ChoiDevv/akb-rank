const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('akb-rank test');
});

app.listen(port, () => {
    console.log(`akb-web listening at http://localhost:${port}`);
});
