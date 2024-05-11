import { initializeApp, cert, getApps } from 'firebase-admin/app';
import dotenv from 'dotenv';
dotenv.config({path: '../../.env'}); 

function initializeFirebaseApp(){
    if (getApps().length === 0) {
        const serviceAccount = process.env.FIREBASE_SERVICE_ACCOUNT;
        initializeApp({
        credential: cert(serviceAccount)
    });
    }
}

export default initializeFirebaseApp;