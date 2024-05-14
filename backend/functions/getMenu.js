import { getFirestore } from "firebase-admin/firestore";
import admin from "firebase-admin";

// Initialize Firebase Admin
import { initializeFirebaseApp } from './firebaseInit.js';
initializeFirebaseApp();

const db = getFirestore();

export async function getMenu() {
  let response = {
    status: "",
    data: "",
  };

  try {
    // Retrieve all items in the menu from Firestore
    const querySnapshot = await db.collection("specials").get();

    if (!querySnapshot.empty) {
      let menuItems = [];
      querySnapshot.forEach(doc => {
        menuItems.push({ id: doc.id, ...doc.data() });
      });

      response.status = 200;
      response.data = menuItems;
    } else {
      response.status = 404;
      response.data = "No menu items found!";
    }
  } catch (error) {
    console.error("Error retrieving menu data:", error);
    response.status = 500;
    response.data = "Internal server error";
  }

  return response;
}
