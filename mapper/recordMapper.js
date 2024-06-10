const logger = require('../config/logger');
const { query } = require('../config/mybatis');

exports.getFirstRank = async (style = '', limit = '', offset = '') => {
    try {
        const params = { style, limit, offset };
        const data = await query('record', 'getFirstRank', params);
        return data;
    } catch (e) {
        logger.error(e);
        throw e;
    }
}