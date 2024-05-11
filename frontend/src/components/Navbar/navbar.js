import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { useNavigate } from 'react-router-dom';


/**
 * Navigation component declaration & configuratios to always be displayed on the site 
 * @param {boolean} loggedIn - Keeps track of whether or not the user has logged in
 * @param {string} type - User type. Default set to surfer
 * @returns Navbar component
 */
const Navbar = (loggedIn, type='surfer') => {

    let navigate = useNavigate();
    const hamburger = ['Login', 'Register'];
    
    const [anchorElMenu, setAnchorElMenu] = useState(null);
    const open = Boolean(anchorElMenu);

    const hamburgerToRouting = {
        'Login': '/login',
        'Register': '/register'
    }

    const handleOpenMenu = (event) => {
      setAnchorElMenu(event.currentTarget);
    };
  
    const handleCloseMenu = () => {
      setAnchorElMenu(null);
    };


    return (
        <React.Fragment>
            <AppBar position="fixed" sx={{ backgroundColor: '#1B1C1E' }}>
                <Toolbar>
                    <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
                        <IconButton size="large" edge="end" color="inherit" aria-label="menu" sx={{ mr: 1, p: 0 }}>
                            <Avatar alt="Hamburger Menu" src="/icons/logo-nobg.png" sx={{ width: 170, height: 40 }}/>
                        </IconButton>
                    </Box>
                        <IconButton size="large" edge="end" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={handleOpenMenu}>
                            <MenuIcon sx={{ color: 'white' }}/>
                        </IconButton>
                        <Menu
                        anchorEl={anchorElMenu}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={open}
                        onClose={handleCloseMenu}
                        sx={{ '& .MuiPaper-root': { padding: 0 } }}
                    >
                        {hamburger.map((item, index) => (
                            <MenuItem key={index} onClick={handleCloseMenu}>
                                {item}
                            </MenuItem>
                        ))}
                    </Menu>
                </Toolbar>
                </AppBar>
        </React.Fragment>
    );
};

export default Navbar;



