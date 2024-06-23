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

exports.getMapList = async (style, limit, offset) => {
    try {
        const params = { style, limit, offset };
        const data = await query('record', 'getMapList', params);
        return data;
    } catch (e) {
        logger.error(e);
        throw e;
    }
}

exports.getMapBySearch = async (search, limit, offset) => {
    try {
        const params = { search, limit, offset };
        const data = await query('record', 'getMapBySearch', params);
        return data;
    } catch (e) {
        logger.error(e);
        throw e;
    }
}