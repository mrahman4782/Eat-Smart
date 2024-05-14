import express from 'express';
import {middlewareInit, logRequests, logSuccess, logFailure} from '../middleware/config.js';

import { createUser } from "./registerUser.js";


import dotenv from "dotenv";
dotenv.config({ path: "../.env" });


const app = express();
const port = 3001;

middlewareInit(app);
app.use(logRequests);
app.use(logSuccess);
app.use(logFailure);

// Get functions
app.get('/', (req, res) => {
    res.status(200).send(`<h1>Successfully Connected to Server</h1>`);
  });


// Post functions
app.post("/api/registerUser", async (req, res) => {
  console.log(req);
  let email = req.body.email;
  let password = req.body.password;
  let username = req.body.username;
  let deposit = req.body.deposit;
  let type = req.body.type;
  let token = req.body.token;

  let checkUserLogin = await createUser(email, password, username, deposit, type, token);

  console.log(checkUserLogin);
  res.status(checkUserLogin.status).send(`Registered!`);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});