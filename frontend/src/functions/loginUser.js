import { signInWithEmailAndPassword, getIdToken } from "firebase/auth";
import axios from 'axios';
import sessionStorage from './sessionStorage.js';
import { FIREBASE_APP, FIREBASE_AUTH } from "./firebaseInit.js";

let outputMsg = {
  data: '',
  status: ''
}

export async function userLogin(email, password, type) {
  try {
    const userCredential = await signInWithEmailAndPassword(FIREBASE_AUTH, email, password);
    console.log(userCredential);
    // Signed in
    const user = userCredential.user;
    console.log('Signed in!');
    console.log(user);
    const token = await getIdToken(user, true);
    console.log(token);

    // Store Async session token to Async Storage
    sessionStorage.setSessionKey(token);

    outputMsg.data = token;
    outputMsg.status = 200;

    return outputMsg;

  } catch (error) {
    outputMsg.data = error;
    outputMsg.status = 400;
    console.log(outputMsg);
    return outputMsg;
  }
}

export default userLogin;