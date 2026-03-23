import React, { useEffect, useState } from 'react';
import { Coffee } from 'lucide-react';
import Hero from './Hero';
import Pros from './Pros';
import CoffeeCard from './CoffeeCard';
import { Link } from 'react-router';

const Home = () => {
    const [coffeeData, setCoffeeData] = useState([]);

    useEffect(() => {
        const loadCoffeeData = async () => {
            const res = await fetch("https://espresso-server.shoaaib.site/coffees");
            const data = await res.json();
            setCoffeeData(data);
        }
        loadCoffeeData();
    }, [])

    console.log(coffeeData);

    return (
        <div>
            <Hero />
            <Pros />
            <div className='px-5 sm:px-30 xl:px-60 mt-5'>
                <div className='mb-5 flex flex-col items-center'>
                    <p className='raleway text-[#331A15] text-center'>--- Sip & Savor ---</p>
                    <h1 className='rancho text-[#331A15] text-center text-[35px] md:text-[55px]'>Our Popular Products</h1>
                    <Link to="/addCoffee" className='bg-[#E3B577] flex items-center justify-center sm:w-35.5 rancho text-white text-[15px] sm:text-[20px] px-5.5 py-2.25 border-black rounded-md hover:bg-transparent hover:border-[#E3B577] border hover:text-[#E3B577] transition duration-200 cursor-pointer'>Add Coffee <Coffee /></Link>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                    {
                        coffeeData.map(coffee => <CoffeeCard coffeeData={coffeeData} setCoffeeData={setCoffeeData}  key={coffee._id} coffee={coffee}></CoffeeCard>)
                    }
                </div>

            </div>
        </div>
    );
};

export default Home;