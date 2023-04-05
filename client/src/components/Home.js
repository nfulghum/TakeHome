import React from 'react';
import {
    Typography,
    Container,
} from '@mui/material';


const Home = () => {
    return (
        <Container
            sx={{
                mt: 15,
                mb: 14,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Typography color="#bf360c" variant='h4' align='center'>
                Welcome to Yodlr
            </Typography>

        </Container>
    )
}

export default Home