import express from 'express';
import "./Hepler/const.js"
import cors from 'cors';
import { PORT } from './Hepler/const.js';
import { DB } from './Hepler/Db.js';
const app = express();
app.use(cors);
app.use(express.json());
app.use(express.urlencoded());
 DB.connect();

app.listen(PORT || 5000,()=>{
    console.log('listening on port '+PORT || 5000);
})