import { initializeApp, cert, getApps } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import dotenv from 'dotenv';
dotenv.config({path: '../../.env'}); 

export async function initializeFirebaseApp(){
    if (getApps().length === 0) {
        const serviceAccount = await getServiceAccount();
        initializeApp({
            credential: cert(serviceAccount)
        });
    }
}

