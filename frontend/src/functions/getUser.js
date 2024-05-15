import axios from "axios";
import sessionStorage from './sessionStorage.js';

export async function getUserInfo() {
    try {

        let token = sessionStorage.sessionKey;
        // Make request to backend
        const response = await axios.post(`http://localhost:3001/api/getUser`, { token: token});
        console.log("Successfully retrieve user!");
        return response;

    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        return error;
    }
}

export default getUserInfo;