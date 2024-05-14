import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AcceptUsers = () => {

    const [users, setUsers] = useState()
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [deposit, setDeposit] = useState('')
    const [type, setType] = useState('')

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const response = await axios.post('http://localhost:3001/api/getAllReqs'); 
        setUsers(response.data);
        
        let createUserClick = await axios.post(`http://localhost:3001/api/registerUser?email=${email}@gmail.com&username=${username}&password=${password}&deposit=${deposit}&type=${type}&token=asd`)
        /*

        Response.data should return you something like this. Write a .map or a for loop around this and display each object into a card.
        Add a button that calls createUserClick. Fill it up with the respective values. You shoud be good to go
        [

    {
        "id": "AZlRMPOljZyObrxtj1vI",
        "date": {
            "_seconds": 1715702771,
            "_nanoseconds": 960000000
        },
        "password": "1234",
        "balance": "2000",
        "type": "chef",
        "email": "FirstChefEver@g",
        "username": "FirstChefEver"
    },
    {
        "id": "SokBJD4uGrUB95biA85o",
        "date": {
            "_seconds": 1715702925,
            "_nanoseconds": 575000000
        },
        "password": "124124",
        "balance": "214",
        "type": "chef",
        "email": "4124",
        "username": "1231"
    },
    {
        "id": "Tii7bpBMPvpsg16Ktg2b",
        "date": {
            "_seconds": 1715700298,
            "_nanoseconds": 365000000
        },
        "password": "chef",
        "balance": "2000",
        "type": "chef",
        "email": "chef",
        "username": "chef"
    },
    {
        "id": "Yx8xz88kLNwtOWIndZyM",
        "date": {
            "_seconds": 1715681649,
            "_nanoseconds": 62000000
        },
        "password": "12345",
        "balance": "1000",
        "type": "Chef",
        "email": "boobb@gmail.com",
        "username": "rat"
    },
    {
        "id": "eB7H5X3b5fHtDp4v0mJG",
        "date": {
            "_seconds": 1715693378,
            "_nanoseconds": 718000000
        },
        "password": "joe12345",
        "balance": "1000",
        "type": "customer",
        "email": "joe1@gmail.com",
        "username": "joe1"
    },
    {
        "id": "ev2Du38ELVU9ILasSED5",
        "password": "123123",
        "balance": "5000",
        "type": "chef",
        "email": "reep@gmail.com",
        "username": "reeper"
    },
    {
        "id": "pOTvGUgXtuyE6ntGNVNP",
        "date": {
            "_seconds": 1715693596,
            "_nanoseconds": 173000000
        },
        "password": "joe12345",
        "balance": "1000",
        "type": "manager",
        "email": "joe1@gmail.com",
        "username": "joe1"
    },
    {
        "id": "xteusxBIyw5itZmCI8Me",
        "date": {
            "_seconds": 1715702517,
            "_nanoseconds": 878000000
        },
        "password": "1234",
        "balance": "1231",
        "type": "chef",
        "email": "Jone",
        "username": "Jone"
    }
]




        */
      } catch (error) {
        console.error('There was an error fetching the feedbacks!', error);
      }
    };

  }, []);

  
  return (
    <div className="HandlingFeedbacks-container">
 
    </div>
  );
};

export default AcceptUsers;
