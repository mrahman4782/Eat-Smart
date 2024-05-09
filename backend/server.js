import express from 'express';
import {middlewareInit, logRequests, logSuccess, logFailure} from './middleware/config.js';

import dotenv from "dotenv";
dotenv.config({ path: "../.env" });


const app = express();
const port = 3001;

middlewareInit(app);
app.use(logRequests);
app.use(logSuccess);
app.use(logFailure);

app.get('/', (req, res) => {
    res.status(200).send(`<h1>Successfully Connected to Server</h1>`);
  });
  
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });