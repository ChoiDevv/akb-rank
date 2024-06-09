const express = require('express');
const router = express.Router();
const logger = require('../config/logger');

const userService = require('../service/userService');

router.get('/points/rank', async (req, res) => {
    try {
        const data = await userService.getPointsRank();
        logger.debug(JSON.stringify(data));
        // res.status(200).render('user_points_rank', data);
    } catch (e) {
        logger.error(e);
        res.status(500).render('error');
    }
});

module.exports = router;