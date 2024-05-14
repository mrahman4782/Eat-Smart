import { getFirestore } from "firebase-admin/firestore";
import admin from "firebase-admin";
import { loginVerify } from "./loginVerify.js";

// Initialize Firebase Admin
import {initializeFirebaseApp} from './firebaseInit.js';
initializeFirebaseApp();

const db = getFirestore();

let response = {
  status: "",
  data: "",
};

export async function retrieveUserData(session) {
  // Verify the user is logged in
  let checkUserLogin = await loginVerify(session);

  if (checkUserLogin.status == 200) {
    try {
      // Get UID from the session
      const uid = checkUserLogin.data.uid;

      // Retrieve user data from Firestore
      let docRef = db.collection("users").doc(uid);
      const doc = await docRef.get();

      if (doc.exists) {
        response.status = 200;
        response.data = doc.data();
      } else {
        response.status = 404;
        response.data = "No such document!";
      }
    } catch (error) {
      console.error("Error retrieving user data:", error);
      response.status = 500;
      response.data = "Internal server error";
    }
  } else {
    response.status = 403;
    response.data = "Unable to authorize user";
  }
  return response;
}
