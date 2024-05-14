import React, { useState, useEffect, useRef } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import getUser from '../../functions/getUser.js';
import sessionStorage from '../../functions/sessionStorage.js';

const Navbar = () => {
    const navigate = useNavigate();
    const [anchorElMenu, setAnchorElMenu] = useState(null);
    const open = Boolean(anchorElMenu);
    const [routes, setRoutes] = useState(['Login', 'Register', 'Profile']);
    const routesInitialized = useRef(false);

    useEffect(() => {
        const updateRoutes = async () => {
            let token = sessionStorage.sessionKey;
            if (token) {
                try {
                    let user = await getUser(token);
                    if (user.data.type === 'customer') {
                        setRoutes(['Logout', 'Profile', 'Products', 'Orders', 'Billing', 'Rate Order']);
                    } else if (user.data.type === 'chef') {
                        setRoutes(['Logout', 'Profile', 'Products', 'Create', 'Order', 'Checkout']);
                    } else if (user.data.type === 'deliverer') {
                        // Set routes for deliverer
                    } else if (user.data.type === 'importer') {
                        // Set routes for importer
                    } else if (user.data.type === 'manager') {
                        // Set routes for manager
                        setRoutes(['Logout', 'Profile', 'Accept Users', 'Report Review']);
                    }
                } catch (error) {
                    console.error('Error fetching user:', error);
                }
            } else {
                setRoutes(['Login', 'Register']); // Set default routes for logged out users
            }
        };
    
        updateRoutes();
    }, [sessionStorage.sessionKey]);

    const hamburgerToRouting = {
        'Login': '/login',
        'Register': '/register',
        'Profile': '/user/profile',
        'Orders': '/user/ordered',
        'Billing': '/user/billing',
        'Rate Order': '/user/feedback',
        'Products': '/product/show',
        'Create': '/product/create',
        'Order': '/product/order',
        'Checkout': '/product/checkout',
        'Report Review': '/manager/handlingfeedbacks',
        'Accept Users': '/manager/acceptusers'
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
                        {routes.map((item, index) => (
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
