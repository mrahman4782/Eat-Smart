import express from 'express';
import { middlewareInit, logRequests, logSuccess, logFailure } from './middleware/config.js';
import { db } from './functions/firebaseInit.js'; // Correct import path
import dotenv from 'dotenv';
dotenv.config({ path: "../.env" });

const app = express();
const port = 3001;

app.use(express.json()); // Add this to parse JSON bodies
middlewareInit(app);
app.use(logRequests);
app.use(logSuccess);
app.use(logFailure);

app.get('/', (req, res) => {
    res.status(200).send(`<h1>Successfully Connected to Server</h1>`);
});

// Endpoint to add data to Firestore collection
app.post('/add-to-collection', async (req, res) => {
    try {
        const data = req.body;
        const docRef = await db.collection('specials').add(data); // Change 'your-collection-name' to your actual collection name
        res.status(200).send(`Document added with ID: ${docRef.id}`);
    } catch (error) {
        res.status(500).send(`Error adding document: ${error}`);
    }
});

// Endpoint to get data from Firestore collection
app.get('/get-collection', async (req, res) => {
    try {
        const specialsSnapshot = await db.collection('specials').get();
        const specialsList = specialsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        res.status(200).json(specialsList);
    } catch (error) {
        res.status(500).send(`Error fetching documents: ${error}`);
    }
});

// Endpoint to create a new user
app.post('/register', async (req, res) => {
    try {
        const { username, email, password, initialDeposit, accountType } = req.body;
        const userDoc = await db.collection('users').add({
            username,
            email,
            password,
            initialDeposit,
            accountType
        });
        res.status(200).send(`User created with ID: ${userDoc.id}`);
    } catch (error) {
        res.status(500).send(`Error creating user: ${error}`);
    }
});

// Endpoint to login user
app.post('/login', async (req, res) => {
    try {
        const { email, password, accountType } = req.body;
        const userSnapshot = await db.collection('users')
            .where('email', '==', email)
            .where('password', '==', password)
            .where('accountType', '==', accountType)
            .get();

        if (userSnapshot.empty) {
            res.status(401).send('Invalid email, password, or account type');
        } else {
            res.status(200).json({ message: 'Login successful!', user: userSnapshot.docs[0].data() });
        }
    } catch (error) {
        res.status(500).send(`Error logging in: ${error}`);
    }
});

// Endpoint to handle feedback
app.post('/feedback', async (req, res) => {
    try {
        const { productName, productId, rating } = req.body;
        const feedbackDoc = await db.collection('feedback').add({
            productName,
            productId,
            rating,
            timestamp: new Date()
        });
        res.status(200).send(`Feedback submitted with ID: ${feedbackDoc.id}`);
    } catch (error) {
        res.status(500).send(`Error submitting feedback: ${error}`);
    }
});

// Endpoint to get all feedbacks with product details
app.get('/feedbacks', async (req, res) => {
    try {
        const feedbacksSnapshot = await db.collection('feedback').get();
        const feedbacksList = await Promise.all(feedbacksSnapshot.docs.map(async (doc) => {
            const feedback = doc.data();
            const productSnapshot = await db.collection('specials').doc(feedback.productId).get();
            const productData = productSnapshot.data();
            return { id: doc.id, ...feedback, product: productData };
        }));
        res.status(200).json(feedbacksList);
    } catch (error) {
        res.status(500).send(`Error fetching feedbacks: ${error}`);
    }
});

// Endpoint to handle feedback decision (approve/disapprove)
app.post('/feedbacks/:id/decision', async (req, res) => {
    try {
        const feedbackId = req.params.id;
        const { decision } = req.body;

        await db.collection('feedback').doc(feedbackId).update({ decision });
        res.status(200).send(`Feedback decision updated to: ${decision}`);
    } catch (error) {
        res.status (500).send(`Error updating feedback decision: ${error}`);
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
