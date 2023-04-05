import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Admin from './Admin';
import Register from './Register';

const YodlrRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/admin' element={<Admin />} />
                <Route path='/register' element={<Register />} />
            </Routes>
        </div>
    )
}

export default YodlrRoutes;