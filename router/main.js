const express = require('express');
const router = express.Router();
const logger = require('../config/logger');

const recordService = require('../service/recordService');

router.get('/', async (req, res) => {
    try {
        let style = req.query.style;
        let limit, offset;

        style = style ? style : 'bhop';
        limit = limit ? limit : 5;
        offset = offset ? offset : 0;
        
        const data = await recordService.getMapList(style, limit, offset);
        res.status(200).render('main', { data: data });
    } catch (e) {
        logger.error(e);
        res.status(500).redirect('error');
    }
});

module.exports = router;