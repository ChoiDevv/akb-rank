const logger = require('../config/logger');

const userMapper = require('../mapper/userMapper');

exports.getPointsRank = async (limit, offset) => {
    try {
        const data = await userMapper.getPointsRank(limit, offset);
        return data;
    } catch (e) {
        logger.error(e);
        throw e;
    }
}