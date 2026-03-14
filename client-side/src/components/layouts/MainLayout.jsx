import React from 'react';
import { Outlet } from "react-router"
import Header from '../Header';
import Hero from '../Hero';
const MainLayout = () => {
    return (
        <div>
            <Header />
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;