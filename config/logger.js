const winston = require('winston');
const process = require('process')
const dayjs = require('dayjs')

const { combine, printf, colorize } = winston.format;

winston.addColors({
    info: 'bold blue',
    warn: 'italic yellow',
    error: 'bold red',
    debug: 'green',
});

const logFormat = printf(({ level, message, stack }) => {
    if(stack) message = message + '\n' + stack
    return `${dayjs().format('YYYY-MM-DD HH:mm:ss')} [${level.toUpperCase()}] - ${message}`;
});

const logger = winston.createLogger({
    format: logFormat
});

logger.add(
    new winston.transports.Console({
        format: combine(colorize({all:process.env.NODE_ENV && process.env.NODE_ENV!='development' ? false : true})),
        level: 'debug',
        handleExceptions: true
    })
)

module.exports = logger;