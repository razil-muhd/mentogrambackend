import express from 'express';
import cors from 'cors';

import ConnectDB from './src/config/db.js';
import env from './env.js';
const app = express();
app.use(cors());
app.use(express.json());
const port = env.PORT;
ConnectDB();
app.listen(port,()=>{
    console.log(`server is listening on port number: ${port}`);
})