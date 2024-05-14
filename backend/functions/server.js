import express from 'express';
import { middlewareInit, logRequests, logSuccess, logFailure } from '../middleware/config.js';
import dotenv from "dotenv";
import cors from 'cors';

dotenv.config({ path: "../.env" });

import { initializeFirebaseApp } from './firebaseInit.js';
initializeFirebaseApp();

import { createUser } from "./registerUser.js";
import { requestAccount } from "./requestAccount.js";
import { loginVerify } from './loginVerify.js';
import { retrieveUserData } from './getUserInfo.js';
import { getMenu } from './getMenu.js';
import { removeMenuItem } from './removeMenuItem.js';
import { addMenuItem } from './addMenuItem.js';
import { submitComplaint } from './submitComplaint.js';
import { getImporters } from './getImporters.js';
import { getUserRequests} from './getUserRequests.js'

const app = express();
const port = 3001;

middlewareInit(app);
app.use(logRequests);
app.use(logSuccess);
app.use(logFailure);
app.use(cors({ origin: 'http://localhost:3000' })); // Allow CORS for your frontend
app.use(express.json());

// Get functions
app.get('/', (req, res) => {
    res.status(200).send(`<h1>Successfully Connected to Server</h1>`);
});

// Retrieve importers
app.get('/api/importers', async (req, res) => {
  let returnMessage = await getImporters();
  console.log(returnMessage);
  res.status(returnMessage.status).json(returnMessage.data);
});

// Post functions

// Manager register account after approval
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

  let checkUserLogin = await requestAccount(email, password, username, deposit, type);

  console.log(checkUserLogin);
  res.status(checkUserLogin.status).send(`Registered request submitted!`);
});

// Verify that a user's login session is active
app.post("/api/verifyLogin", async (req, res) => {
  console.log(req);
  let token = req.body.token || req.query.token;
  let checkUserLogin = await loginVerify(token);

  console.log(checkUserLogin);
  res
    .status(checkUserLogin.status)
    .send(`Logged in! Expiration time: ${checkUserLogin.data.exp}`);
});

// Get user information
app.post("/api/getUser", async (req, res) => {
  console.log(req);
  let token = req.body.token || req.query.token;
  let returnMessage = await retrieveUserData(token);
  console.log(returnMessage);
  res.status(returnMessage.status).send(returnMessage.data);
});

// Chef add item to menu
app.post("/api/addMenuItem", async (req, res) => {
  console.log(req);
  let token = req.body.token || req.query.token;
  let item = req.body.item || req.query.item;
  let returnMessage = await addMenuItem(token, item);
  console.log(returnMessage);
  res.status(returnMessage.status).send(returnMessage.data);
});

// Get all items from menu
app.post("/api/getMenu", async (req, res) => {
  console.log(req);
  let returnMessage = await getMenu();
  console.log(returnMessage);
  res.status(returnMessage.status).send(returnMessage.data);
});

// Chef remove item from menu
app.post("/api/removeMenuItem", async (req, res) => {
  console.log(req);
  let token = req.body.token || req.query.token;
  let itemId = req.body.itemId || req.query.itemId;
  let returnMessage = await removeMenuItem(token, itemId);
  console.log(returnMessage);
  res.status(returnMessage.status).send(returnMessage.data);
});

// User submit a complaint
app.post("/api/submitComplaint", async (req, res) => {
  console.log(req);

  // Retrieve parameters from body
  let token = req.body.token || req.query.token;
  let complaintText = req.body.complaintText;
  let importerId = req.body.importerId;

  let returnMessage = await submitComplaint(token, complaintText, importerId);
  console.log(returnMessage);
  res.status(returnMessage.status).send(returnMessage.data);
});


// Manager request all account creations
app.post("/api/getAllReqs", async (req, res) => {
  console.log(req);
  let returnMessage = await getUserRequests();
  console.log(returnMessage);
  res.status(returnMessage.status).send(returnMessage.data);
});



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Importer submit a complaint about a chef
app.post("/api/submitImporterComplaint", async (req, res) => {
  console.log(req);

  // Retrieve parameters from body
  let token = req.body.token || req.query.token;
  let complaintText = req.body.complaintText;
  let chefId = req.body.chefId;

  let returnMessage = await submitImporterComplaint(token, complaintText, chefId);
  console.log(returnMessage);
  res.status(returnMessage.status).send(returnMessage.data);
});