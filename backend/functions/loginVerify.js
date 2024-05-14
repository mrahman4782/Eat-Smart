import admin from 'firebase-admin'; // Import the default export for auth
import 'firebase/auth';

import {initializeFirebaseApp} from './firebaseInit.js';
initializeFirebaseApp();
let response = {
  status: '',
  data: ''
}

export async function loginVerify(token){
  
  try {

    let decodedToken = await admin.auth().verifyIdToken(token);
    console.log(decodedToken);
    response.status = 200;
    response.data = decodedToken;
    return response;

  } catch (error) {
    console.error("Unable to verify token. Error: ", error.message);
    // Handle errors here, such as showing an alert to the user
    response.status = 403;
    response.data = error.message;
    return response;
  }
}

console.log(await loginVerify('eyJhbGciOiJSUzI1NiIsImtpZCI6ImUyYjIyZmQ0N2VkZTY4MmY2OGZhY2NmZTdjNGNmNWIxMWIxMmI1NGIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZWF0c21hcnQtMWExYzAiLCJhdWQiOiJlYXRzbWFydC0xYTFjMCIsImF1dGhfdGltZSI6MTcxNTY4MjA5MSwidXNlcl9pZCI6Ijlhc01uQ01KZ25ObXR1RDVQbFF2eGhvR1Y1djIiLCJzdWIiOiI5YXNNbkNNSmduTm10dUQ1UGxRdnhob0dWNXYyIiwiaWF0IjoxNzE1NjgyMDkyLCJleHAiOjE3MTU2ODU2OTIsImVtYWlsIjoiYm9iQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJib2JAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.Hg6Z5BwSJBtY14tTfvz9m_QNkmuB2Z_9AEpHrBOp0_orzI1oP56JLHiRHzMi24QYaugbWoGWnUKu8aqFCj1NaXC3i8zYiQaktFpFvMSJGMj9X6iYGTdimzGVZGzk_1BSQ7emT67NGFcifyizxorbeHS3YbIPoPGrUTAp6kn0taSWQX9tRjRxaijghzjK5nQckpqbJVY95CO0o905WoKRpKs5tnnD3ifJomIiXHhiTSckCVbwAty5YvGnr_UVAKj3hSulaWJMYjsOHSb7RJCxNZk_DSM5svgIUT7XYx2gZP6sdfeO4rMjC_INXflNYs4De9ouiaNEDvfcOVtSr1FKgA'))