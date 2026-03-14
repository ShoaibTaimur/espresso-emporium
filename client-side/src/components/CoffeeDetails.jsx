import { StepBack } from 'lucide-react';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router';

const CoffeeDetails = () => {
    const navigate = useNavigate();
    const idOBJ = useParams();
    const id = idOBJ.id;
    const [coffeeData, setCoffeeData] = useState([]);
    useEffect(() => {
        const loadData = async () => {
            try {
                const res = await fetch(`http://localhost:3000/coffees/${id}`);
                const data = await res.json();
                setCoffeeData(data);
            }
            catch (err) {
                console.log(err);
                navigate("/error");
            }
        }
        loadData();
    }, [navigate, id]);
    const { name, photo, supplier, taste, details, price } = coffeeData;
    return (
        <div className='px-5 md:px-20 py-20'>
            <Link to="/" className='flex items-center gap-2 mb-5 rancho text-[20px] md:text-[30px]'><StepBack />Back to Home</Link>
            <div className='bg-[#D2B48C]/20 py-18 md:px-15 xl:px-46.25 flex'>
                <div className='w-[40%] flex justify-center items-center'>
                    <img className='h-40 sm:h-70 lg:h-100' src={photo} alt="" />
                </div>
                <div className='w-[60%] flex flex-col justify-center'>
                    <h1 className='rancho text-[30px] sm:text-[40px] md:text-[50px] mb-6 text-[#331A15]'>{name}</h1>
                    <p className='raleway text-[15px] md:text-[20px] mb-2 font-bold text-[#331A15]'>Details: <span className='font-light'>{details}</span></p>
                    <p className='raleway text-[15px] md:text-[20px] mb-2 font-bold text-[#331A15]'>Supplier: <span className='font-light'>{supplier}</span></p>
                    <p className='raleway text-[15px] md:text-[20px] mb-2 font-bold text-[#331A15]'>Taste: <span className='font-light'>{taste}</span></p>
                    <p className='raleway text-[15px] md:text-[20px] mb-2 font-bold text-[#331A15]'>Price: <span className='font-light'>{price}</span></p>
                </div>

            </div>
        </div>
    );
};

export default CoffeeDetails;