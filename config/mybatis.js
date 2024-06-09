const connection = require('./connection');
const mybatisMapper = require('mybatis-mapper');
const path = require('path').resolve();

require('dotenv').config();
console.log('Connect DB on ', process.env.DB_HOST, process.env.DB_PORT);

try {
    const admin = path + '/xml/admin.xml';
    const record = path + '/xml/record.xml';
    const user = path + '/xml/user.xml';

    mybatisMapper.createMapper([
        admin,
        record,
        user
    ]);
} catch (e) {
    console.log(e);
    process.exit(-1);
}

const mapperConfig = { language: 'sql', indent: ' ' };

exports.query = async (namespace, id, param) => {
    return new Promise((resolve, reject) => {
        const query = mybatisMapper.getStatement(namespace, id, param, mapperConfig);
        console.log(query);
        connection((conn) => {
            console.log(namespace, id, param);
            conn.query(query, (err, result) => {
                if (err) reject(err);
                resolve(result);
                conn.release();
            });
        });
    });
}