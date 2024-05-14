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


export async function createUser(email, password, username, deposit, type, token) {

  let data = {
    'balance': '',
    'cart': [],
    'email': '',
    'favoriteDish': [],
    'orders': [],
    'rank': '',
    'score': '',
    'type': '',
    'username': '',
    'warnings': ''
  }

  try {
    const userRecord = await admin.auth().createUser({
      email: `${email}`,
      password: `${password}`,
      emailVerified: false,
      disabled: false,
    });

    // Update users collection database of user information
    let docRef = db.collection('users').doc(userRecord.uid);
    data.email = email;
    data.username = username;
    data.balance = deposit;
    data.type = type;

    await docRef.set(data);

    response.status = 201;
    response.data = userRecord;

    console.log('Successfully created user:', userRecord.uid);
    return response;

  } catch (error) {
    console.error('Error creating user:', error);
    response.status = 500;
    response.data = error;
    return response;
  }
}

