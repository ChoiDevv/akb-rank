const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('akb-rank record');
});

module.exports = router;