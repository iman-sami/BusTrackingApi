const dotenv = require('dotenv');
dotenv.config();

export const {
PORT,
DBNAME,
DBPASS,
DBUSER,
DBHOST
} = process.env;