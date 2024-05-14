import React, { useState } from 'react';
import { Box, TextField, Button, Grid, Paper, Typography, MenuItem, FormControl, Select, InputLabel} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './register.css';
import Message from '../../components/Message/message';

const Register = () => {

    const [submitClicked, setSubmitClicked] = useState(false);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [initialDeposit, setInitialDeposit] = useState('');
    const [accountType, setAccountType] = useState('');

    let navigate = useNavigate();

    const navigateToLogin = () => {
        navigate('/login');
    }
    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleInitialDepositChange = (event) => {
        setInitialDeposit(event.target.value);
    }

    const handleAccountTypeChange = (event) => {
        setAccountType(event.target.value);
    }

    const errorMessagePopup = (event) => {
        <Message message="Testtttttttttttttttt" type="success"/>
    }

    const registerButtonPress = (event) => {
        setSubmitClicked(true);
        console.log('Secret key')
    }

    return (
        
        <Box sx={{ flexGrow: 1, height: '100vh', margin: 0 }}>
        <Grid container alignItems="center" justifyContent="center" style={{ height: '100%', margin: 0 }}>
            {!submitClicked ? 
                       <Grid item xs={12} sm={6} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#F9F6F0', margin: 0, height: '100vh'}}>
                       <Typography variant="h3" sx={{color: 'black', fontFamily: 'Juana-Light', marginTop: 13, marginRight: '22vw'}}>
                           Welcome!
                       </Typography>
                       <Typography variant="p4" sx={{color: 'black', fontFamily: 'Georgia', marginTop: 1.5, marginRight: '7vw'}}>
                           Fill out the information below to register as a new user.
                       </Typography>
                       <Box sx={{ marginTop: 4, width: 500}}>
                           <FormControl fullWidth>
                               <InputLabel id="demo-simple-select-required-label">Account Type *</InputLabel>
                               <Select
                               required
                               labelId="demo-simple-select-required-label"
                               id="demo-simple-select-required"
                               value={accountType}
                               label="Age"
                               onChange={handleAccountTypeChange}
                               >
                               <MenuItem value={'customer'}>Customer</MenuItem>
                               <MenuItem value={'chef'}>Chef</MenuItem>
                               <MenuItem value={'deliverer'}>Deliverer</MenuItem>
                               <MenuItem value={'importer'}>Food Importer</MenuItem>
                               <MenuItem value={'manager'}>Manager</MenuItem>
           
                               </Select>
                           </FormControl>
                           </Box>
                       <TextField required id="standard-required" label="Username" variant="outlined" value={username} onChange={handleUsernameChange} sx={{marginTop: 1, width: 500}}/>
                       <TextField required type="email" id="standard-required" label="Email" variant="outlined" value={email} onChange={handleEmailChange} sx={{marginTop: 1, width: 500}}/>
                       <TextField required id="standard-required" label="Password" variant="outlined" value={password} onChange={handlePasswordChange} sx={{marginTop: 1, width: 500}}/>
                       <TextField required type="number" id="standard-required" label="Initial Deposit ($)" variant="outlined" value={initialDeposit} onChange={handleInitialDepositChange} sx={{marginTop: 1, width: 500}}/>
                       <Button variant="contained" size="large" onClick={registerButtonPress} sx={{ marginTop: 2, width: 500, color: 'white', backgroundColor: 'black' }}>Register</Button>
                       <Button color="secondary" onClick={navigateToLogin} sx={{}}>Already have an account? Login here</Button>
                     </Grid>
            :        
            <Grid item xs={12} sm={6} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#F9F6F0', margin: 0, height: '100vh'}}>
            <Typography variant="h3" sx={{color: 'black', fontFamily: 'Juana-Light', marginTop: 13, marginRight: '22vw'}}>
                Welcome!
            </Typography>
            <Typography variant="p4" sx={{color: 'black', fontFamily: 'Georgia', marginTop: 1.5, marginRight: '0', paddingLeft: '7.5vw', paddingRight: '7.5vw' }}>
                Your account registration request has been submitted. You'll be able to login after approval.
            </Typography>
  
            <Button color="secondary" onClick={navigateToLogin} sx={{marginTop: 2.5}}>Already have an account? Login here</Button>
          </Grid>}
   
          <Grid item xs={12} sm={6} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#293040', margin: 0, height: '100vh' }}>
            <img className="logoImg" src="./icons/logo-full-nobg.png" alt="Logo" />
            <Typography variant="h4" sx={{color: 'white', fontFamily: 'Juana-Light', fontStyle: 'italic', textAlign: 'center', marginRight: 5, marginLeft: 5}}>
                Enjoy every bite knowing we’ve tailored your meals for taste and your health goals.
            </Typography>
          </Grid>
        </Grid>
        </Box>
    );
}


export default Register;