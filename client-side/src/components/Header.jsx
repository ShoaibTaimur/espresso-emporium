import React from 'react';
import logo from "../../../assets/more/logo1.png";

const Header = () => {
    return (
        <div className='bg-[#331A15] py-3.75 flex justify-center'>
            <div className='flex items-center'>
                <img className='w-12 md:w-18.75' src={logo} alt="" />
                <h1 className='rancho text-white text-[22px] md:text-[40px]'>Espresso Emporium</h1>
            </div>
        </div>
    );
};

export default Header;