import axios from "axios";
import sessionStorage from './sessionStorage.js';

export async function createProduct(item) {
    try {

        let token = sessionStorage.sessionKey;
        // Make request to backend
        const response = await axios.post(`http://localhost:3001/api/addMenuItem`, { token: token, item: item});
        console.log("Successfully made item!");
        return response;

    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        return error;
    }
}

export default createProduct;