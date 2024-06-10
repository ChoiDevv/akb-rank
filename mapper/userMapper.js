const logger = require('../config/logger');
const { query } = require('../config/mybatis');

exports.getPointsRank = async (limit = '', offset = '') => {
    try {
        const params = { limit, offset };
        const data = await query('user', 'getPointsRank', params);
        return data;
    } catch (e) {
        logger.error(e);
        throw e;
    }
}