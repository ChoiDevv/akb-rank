const logger = require('../config/logger');

const userMapper = require('../mapper/userMapper');

exports.getPointsRank = async () => {
    try {
        const data = await userMapper.getPointsRank();
        return data;
    } catch (e) {
        logger.error(e);
        throw e;
    }
}