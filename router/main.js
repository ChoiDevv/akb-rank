const express = require('express');
const router = express.Router();
const logger = require('../config/logger');

const recordService = require('../service/recordService');

router.get('/', async (req, res) => {
    try {
        let style = req.query.style || 'bhop';
        
        const data = await recordService.getMapList(style);
        res.status(200).render('main', { map_list: data });
    } catch (e) {
        logger.error(e);
        res.status(500).redirect('error');
    }
});

module.exports = router;