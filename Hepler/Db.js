import mysql from "mysql2";
import { DBHOST,DBUSER,DBPASS,DBNAME } from './const.js';
export default function ConnectDB() {
    
    const db = mysql.createConnection(
        {
            host:DBHOST,
            user:DBUSER,
            password:DBPASS,
            database:DBNAME,
            multipleStatements:true,
        }
    );

    return db;

}
export const DB = ConnectDB();