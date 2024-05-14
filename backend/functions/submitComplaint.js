import { getFirestore } from 'firebase-admin/firestore';
import { retrieveUserData } from './getUserInfo.js';
import { initializeFirebaseApp } from './firebaseInit.js';

initializeFirebaseApp();

export const submitComplaint = async (session, complaintText, selectedItems) => {
  const db = getFirestore();
  let response = {
    status: '',
    data: ''
  };

  // Verify the user is logged in and is a Chef
  let checkUserLogin = await retrieveUserData(session);

  if (checkUserLogin.status === 200 && checkUserLogin.data.type === 'Chef') {
    try {
      await db.collection('complaints').add({
        complaintText,
        selectedItems,
        timestamp: new Date().toISOString()
      });
      response.status = 200;
      response.data = 'Complaint submitted successfully';
    } catch (error) {
      console.error('Error submitting complaint:', error);
      response.status = 500;
      response.data = 'Failed to submit complaint';
    }
  } else {
    response.status = 403;
    response.data = 'User unauthorized to make this request';
  }

  return response;
};
