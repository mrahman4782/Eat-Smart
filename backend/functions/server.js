import express from 'express';
import {middlewareInit, logRequests, logSuccess, logFailure} from '../middleware/config.js';

import { createUser } from "./registerUser.js";
import {requestAccount} from "./requestAccount.js"

import dotenv from "dotenv";
dotenv.config({ path: "../.env" });

import {initializeFirebaseApp} from './firebaseInit.js';
initializeFirebaseApp();

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

// Manager request account after approval
app.post("/api/registerUser", async (req, res) => {
  console.log(req);

  // Retrieve parameters from either query or body
  let email = req.body.email || req.query.email;
  let password = req.body.password || req.query.password;
  let username = req.body.username || req.query.username;
  let deposit = req.body.deposit || req.query.deposit;
  let type = req.body.type || req.query.type;
  let token = req.body.token || req.query.token;

  let checkUserLogin = await createUser(email, password, username, deposit, type, token);

  console.log(checkUserLogin);
  res.status(checkUserLogin.status).send(`Registered!`);
});

// User submit register request for an account
app.post("/api/requestAccount", async (req, res) => {
  console.log(req);
  
  // Retrieve parameters from either query or body
  let email = req.body.email || req.query.email;
  let password = req.body.password || req.query.password;
  let username = req.body.username || req.query.username;
  let deposit = req.body.deposit || req.query.deposit;
  let type = req.body.type || req.query.type;
  let token = req.body.token || req.query.token;

  let checkUserLogin = await requestAccount(email, password, username, deposit, type, token);

  console.log(checkUserLogin);
  res.status(checkUserLogin.status).send(`Registered request submitted!`);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});