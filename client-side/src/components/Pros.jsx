import React from 'react';
import teaCup from "../../../assets/icons/1.png"
import badge from "../../../assets/icons/2.png"
import beans from "../../../assets/icons/3.png"
import cup from "../../../assets/icons/4.png"

const Pros = () => {
    return (
        <div className='bg-[#ECEAE3] px-10 md:px-25 xl:px-50 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
            <div>
                <img src={teaCup} alt="" />
                <h1 className='rancho text-[#331A15] text-[30px]'>Awesome Aroma</h1>
                <p className='raleway text-[#331A15] text-[16px]'>You will definitely be a fan of the design & aroma of your coffee</p>
            </div>
            <div>
                <img src={badge} alt="" />
                <h1 className='rancho text-[#331A15] text-[30px]'>High Quality</h1>
                <p className='raleway text-[#331A15] text-[16px]'>We served the coffee to you maintaining the best quality</p>
            </div>
            <div>
                <img src={beans} alt="" />
                <h1 className='rancho text-[#331A15] text-[30px]'>Pure Grades</h1>
                <p className='raleway text-[#331A15] text-[16px]'>The coffee is made of the green coffee beans which you will love</p>
            </div>
            <div>
                <img src={cup} alt="" />
                <h1 className='rancho text-[#331A15] text-[30px]'>Proper Roasting</h1>
                <p className='raleway text-[#331A15] text-[16px]'>Your coffee is brewed by first roasting the green coffee beans</p>
            </div>
        </div>
    );
};

export default Pros;