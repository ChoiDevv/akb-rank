const express = require('express');
const router = express.Router();
const logger = require('../config/logger');

const userService = require('../service/userService');

router.get('/points-rank', async (req, res) => {
    try {
        let limit = req.query.limit;
        let offset = req.query.offset;

        limit = limit ? limit : 10;
        offset = offset ? offset : 0;

        const data = await userService.getPointsRank(limit, offset);
        res.status(200).render('user/user_points_rank', { data: data });
    } catch (e) {
        logger.error(e);
        res.status(500).render('error');
    }
});

module.exports = router;