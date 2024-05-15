import { getFirestore } from 'firebase-admin/firestore';
import { initializeFirebaseApp } from './firebaseInit.js';

initializeFirebaseApp();

//Function to retrieve chefs information
export const getChefs = async () => {
  const db = getFirestore();
  let response = {
    status: '',
    data: ''
  };

  try {
    const querySnapshot = await db.collection('users').where('accountType', '==', 'chef').get();
    if (!querySnapshot.empty) {
      let chefs = [];
      querySnapshot.forEach(doc => {
        chefs.push({ id: doc.id, ...doc.data() });
      });
      response.status = 200;
      response.data = chefs;
    } else {
      response.status = 404;
      response.data = 'No chefs found';
    }
  } catch (error) {
    console.error('Error retrieving chefs:', error);
    response.status = 500;
    response.data = 'Internal server error';
  }

  return response;
};
