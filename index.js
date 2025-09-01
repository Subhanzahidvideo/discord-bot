require('dotenv').config();
const { startBot } = require('./bot');

const token = process.env.TOKEN;

if (!token) {
    console.error('❌ TOKEN not found in .env');
    process.exit(1);
}

startBot(token);
