import React from 'react';
import heroBG from "../../../assets/more/3.png"

const Hero = () => {
    return (
        <div className='h-200 bg-cover bg-center p-5 xl:grid xl:grid-cols-2' style={{backgroundImage:`url(${heroBG})`}}>
            <div className='hidden xl:flex'></div>
            <div className='flex flex-col items-center xl:items-start h-full justify-center'>
                <h1 className='rancho text-[30px] text-center sm:text-[45px] text-white mb-2'>Would you like a Cup of Delicious Coffee?</h1>
                <p className='raleway sm:w-140 text-[12px] sm:text-[14px] text-white opacity-80 mb-5'>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                <button className='bg-[#E3B577] sm:w-32.5 rancho text-[15px] sm:text-[20px] px-5.5 py-2.25 rounded-md hover:bg-transparent hover:border-white border hover:text-white transition duration-200 cursor-pointer'>Learn More</button>
            </div>
        </div>
    );
};

export default Hero;