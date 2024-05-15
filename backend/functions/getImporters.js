import { getFirestore } from 'firebase-admin/firestore';
import { initializeFirebaseApp } from './firebaseInit.js';

initializeFirebaseApp();

//Function to retrieve importers information
export const getImporters = async () => {
  const db = getFirestore();
  let response = {
    status: '',
    data: ''
  };

  try {
    const querySnapshot = await db.collection('users').where('accountType', '==', 'importer').get();
    if (!querySnapshot.empty) {
      let importers = [];
      querySnapshot.forEach(doc => {
        importers.push({ id: doc.id, ...doc.data() });
      });
      response.status = 200;
      response.data = importers;
    } else {
      response.status = 404;
      response.data = 'No importers found';
    }
  } catch (error) {
    console.error('Error retrieving importers:', error);
    response.status = 500;
    response.data = 'Internal server error';
  }

  return response;
};
