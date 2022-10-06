import dotenv from 'dotenv';
dotenv.config();

export const {
PORT,
DBNAME,
DBPASS,
DBUSER,
DBHOST
} = process.env;