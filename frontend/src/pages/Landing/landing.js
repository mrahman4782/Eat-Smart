import * as React from 'react';
import './landing.css';
import { Box, TextField, Button, Grid, Paper, Typography} from '@mui/material';
import { useNavigate } from 'react-router-dom';


const Landing = () => {
    
  let navigate = useNavigate();
  
  const navigateToRegister = () => {
    navigate('/register');
  }

  const navigateToHome = () => {
    navigate('/product/show')
  }

    return (
      <Box sx={{ flexGrow: 1, height: '100vh', backgroundColor: '#293040', marginBottom: 0 }}>
        <Grid container alignItems="center" justifyContent="center" style={{ height: '100%', margin: 0 }}>
          <Grid item xs={12} sm={6} style={{ display: 'flex', justifyContent: 'flex-end', paddingRight: '50px' }}>
            <img className="logoImg" src="./icons/logo-full-nobg.png" alt="Logo" />
          </Grid>
          <Grid item xs={12} sm={6} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',  padding: 20, paddingRight: 30 }}>
            <Typography variant="h4" sx={{color: 'white', fontFamily: 'Juana-Light', fontStyle: 'italic', textAlign: 'center'}}>
              Embark on a culinary adventure where healthy delights await at our doorstep.
            </Typography>
            <Grid container style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Button variant="contained" size="large" color="primary" onClick={navigateToHome} sx={{ marginTop: 10, width: 200 }}>Start Browsing</Button>
              <Button variant="outlined" size="large" onClick={navigateToRegister} sx={{ marginTop: 2, width: 200, color: 'white', borderColor: 'white' }}>Sign Up Now</Button>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    );
}


export default Landing;


