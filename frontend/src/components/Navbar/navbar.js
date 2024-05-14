import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';


const Navbar = () => {
    const navigate = useNavigate();
    const [anchorElMenu, setAnchorElMenu] = useState(null);
    const open = Boolean(anchorElMenu);
    const hamburgerToRouting = {
        'Login': '/login',
        'Register': '/register',
        'Profile': '/user/profile',
    };

    const handleOpenMenu = (event) => {
        setAnchorElMenu(event.currentTarget);
    };
  
    const handleCloseMenu = () => {
        setAnchorElMenu(null);
    };

    const handleMenuItemClick = (item) => {
        navigate(hamburgerToRouting[item]);
        handleCloseMenu();
    };

    return (
        <React.Fragment>
            <AppBar position="fixed" sx={{ backgroundColor: '#1B1C1E' }}>
                <Toolbar>
                    <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
                        <IconButton size="large" edge="end" color="inherit" aria-label="menu" onClick={() => navigate('/')} sx={{ mr: 1, p: 0 }}>
                            <Avatar alt="Eat Smart Logo" src="/icons/logo-nobg.png" sx={{ width: 170, height: 40 }}/>
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
                        {Object.keys(hamburgerToRouting).map((item, index) => (
                            <MenuItem key={index} onClick={() => handleMenuItemClick(item)}>
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
