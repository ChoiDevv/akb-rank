const logger = require('../config/logger');

const recordMapper = require('../mapper/recordMapper');

exports.getFirstRank = async (style, limit, offset) => {
    try {
        const data = await recordMapper.getFirstRank(style, limit, offset);
        return data;
    } catch (e) {
        logger.error(e);
        throw e;
    }
}

exports.getMapList = async (style) => {
    try {
        const data = await recordMapper.getMapList(style);
        if (data.length < 1) throw e;

        return data;
    } catch (e) {
        logger.error(e);
        throw e;
    }
}