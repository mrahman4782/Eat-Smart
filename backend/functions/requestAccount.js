import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import admin from 'firebase-admin'; // Import the default export for auth

import initializeFirebaseApp from './firebaseInit.js';

initializeFirebaseApp();

const db = getFirestore();

let response = {
  status: '',
  data: ''
}

export async function requestAccount(email, password, username, deposit, type, token) {

  let data = {
    'balance': deposit,
    'email': email,
    'type': type,
    'username': username,
    'password': password
  }

  try {

    // Add account request to the accountRequests collection with a random ID
    let docRef = await db.collection('accountRequests').add(data);

    response.status = 201;
    response.data = { id: docRef.id, ...data };

    console.log('Successfully requested account creation with ID:', docRef.id);
    return response;

  } catch (error) {
    console.error('Error requesting user:', error);
    response.status = 500;
    response.data = error;
    return response;
  }
}
