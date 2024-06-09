const logger = require('../config/logger');
const { query } = require('../config/mybatis');

exports.getPointsRank = async () => {
    try {
        const data = await query('user', 'getPointsRank');
        return data;
    } catch (e) {
        logger.error(e);
        throw e;
    }
}