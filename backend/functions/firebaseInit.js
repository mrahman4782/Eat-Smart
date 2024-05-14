import { initializeApp, cert, getApps } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import dotenv from 'dotenv';
import { promises as fs } from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

dotenv.config({ path: '../../.env' });

// Function to read and parse the service account JSON file
async function getServiceAccount() {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const serviceAccountPath = `${__dirname}/../creds.json`;
    const serviceAccountData = await fs.readFile(serviceAccountPath, 'utf8');
    return JSON.parse(serviceAccountData);
}

async function initializeFirebaseApp() {
    if (getApps().length === 0) {
        const serviceAccount = await getServiceAccount();
        initializeApp({
            credential: cert(serviceAccount)
        });
    }
}

await initializeFirebaseApp();
const db = getFirestore();

get_service_account(initializeFirebaseApp)
export { db };
