import { getFirestore } from "firebase-admin/firestore";
import admin from "firebase-admin";
import { retrieveUserData } from "./getUserInfo.js";

// Initialize Firebase Admin
import {initializeFirebaseApp} from './firebaseInit.js';
initializeFirebaseApp();

const db = getFirestore();

let response = {
  status: "",
  data: "",
};

export async function addMenuItem(session, item) {
  // Verify the user is logged in and a Chef
  let checkUserLogin = await retrieveUserData(session);

  if (checkUserLogin.data.type == 'chef') {
    try {
        const newItemRef = await db.collection("menu").add(item);
        response.status = 201;
        response.data = { id: newItemRef.id, ...item };
        console.log('Successfully added new item with ID:', newItemRef.id);
      } catch (error) {
        console.error("Error adding item to menu:", error);
        response.status = 500;
        response.data = "Internal server error";
      }
  } else {
    response.status = 403;
    response.data = "User unauthorized to make this request";
  }
  return response;
}



// Example usage
const newItem = {
  name: "Bread",
  price: '16.99',
  calories: '400',
  carbs: '25',
  fat: '15',
  protein: '20',
  rating: "4",
  score: "8",
  votes: "2",
  tags: ['Gluten-Free', 'Nut-Free'],
};

//console.log(await addMenuItem('eyJhbGciOiJSUzI1NiIsImtpZCI6ImUyYjIyZmQ0N2VkZTY4MmY2OGZhY2NmZTdjNGNmNWIxMWIxMmI1NGIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZWF0c21hcnQtMWExYzAiLCJhdWQiOiJlYXRzbWFydC0xYTFjMCIsImF1dGhfdGltZSI6MTcxNTY4NzUxNSwidXNlcl9pZCI6ImxicEJtRU9HS0JXTW1GYUdyNVhIeTduNUpCcDEiLCJzdWIiOiJsYnBCbUVPR0tCV01tRmFHcjVYSHk3bjVKQnAxIiwiaWF0IjoxNzE1Njg3NTE1LCJleHAiOjE3MTU2OTExMTUsImVtYWlsIjoiYmdiYkBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiYmdiYkBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.Uq5VH4nfWTe3ZU5QQbcgJFwJ6ZRI3at_lJkcsuYE8C6Jo1ZxzFTKL49ZQAD44fSW8Xd-0sNdCNpQRgQPTG29c00mV0qQ8Jloftk9NxQZEZwz176Sejfq33gAxkVfKD5ouEGmHvKTaj-VnEOob2aQgCzA2xdRkQUj1BsL4JZE4HMW56WWh8Kfxtw9Xdk8rbDfJIrpouHIdR7gy8LnETsBWH8NsNSNYFQYZgLJJYGlFKP9ZsC6pJyzOtLA1uiwktcIHhAALwWR3Bw5CRyTcD_JeWrdvVXkP9F_hHx0O7zTnbUe99QQcCpdZR9YVus2uHcyuNyt1OZJaKUx6ODcl_WNlw', newItem))
