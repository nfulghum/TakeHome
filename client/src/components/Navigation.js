import React from 'react';
import {
    Link,
    AppBar,
    Box,
    Toolbar,
    Typography,
} from '@mui/material'
import { NavLink } from 'react-router-dom';

const Navigation = () => {

    const linkProps = {
        underline: 'hover',
        component: NavLink,
        color: '#bf360c'
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" style={{ background: '#e0e0e0' }}>
                <Toolbar>
                    <Typography variant="h4" component="div" color='#bf360c' sx={{ flexGrow: 1 }}>
                        Yodlr
                    </Typography>

                    <>
                        <Link sx={{ mr: 2 }} {...linkProps} to="/">Home</Link>
                        <Link sx={{ mr: 2 }} {...linkProps} to="/register">Register</Link>
                        <Link sx={{ mr: 2 }} {...linkProps} to="/admin">Admin</Link>
                    </>

                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Navigation;
