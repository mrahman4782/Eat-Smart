import axios from 'axios';

export async function registerRequest(username, email, password, initialDeposit, accountType) {
  try {

    const response = await axios.post(`http://localhost:3001/api/requestAccount`, { username: username, email: email, password: password, deposit: initialDeposit, type: accountType});
    return response;

  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("Code: ", errorCode);
    console.log("Msg :", errorMessage);
    return error; 
  }
}

export default registerRequest;