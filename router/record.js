const express = require('express');
const router = express.Router();
const logger = require('../config/logger');

const recordService = require('../service/recordService');

router.get('/first-rank', async (req, res) => {
    try {
        let style = req.query.style;
        let limit = req.query.limit;
        let offset = req.query.offset;

        style = style ? style : 'bhop';
        limit = limit ? limit : 10;
        offset = offset ? offset : 0;

        const data = await recordService.getFirstRank(style, limit, offset);
        res.status(200).render('record/record_first_rank', { data: data });
    } catch (e) {
        logger.error(e);
        res.status(500).redirect('error');
    }
});

router.get('/map', async (req, res) => {
    try {
        let search = req.query.search;
        let limit = req.query.limit || 10;
        let offset = req.query.offset || 0;
        let style = req.query.style;

        const [map_list, map] = await Promise.all([
            recordService.getMapList(style),
            recordService.getMapBySearch(search, limit, offset)
        ]);

        res.status(200).render('record/record_map_search', { map_list: map_list, map: map, search: search });
    } catch (e) {
        logger.error(e);
        res.status(500).redirect('error');
    }
});

module.exports = router;