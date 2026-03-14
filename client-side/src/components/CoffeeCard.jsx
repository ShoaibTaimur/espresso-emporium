import React from 'react';
import { Eye, Pen, Trash } from 'lucide-react';

const CoffeeCard = ({ coffee }) => {
    const { photo, name, supplier, price } = coffee;
    console.log(coffee);
    return (
        <div className='bg-[#D2B48C]/20 rounded-xl flex justify-between pr-5 pl-2 py-3'>
            <img className='h-34.75' src={photo} alt="" />
            <div className='flex flex-col justify-center'>
                <p className='raleway text-[#331A15] font-bold'>Name: <span className='font-light'>{name}</span></p>
                <p className='raleway text-[#331A15] font-bold'>Supplier: <span className='font-light'>{supplier}</span></p>
                <p className='raleway text-[#331A15] font-bold'>Price: <span className='font-light'>{price}</span></p>
            </div>
            <div className='flex flex-col justify-center gap-2'>
                <button className='cursor-pointer p-2 rounded-xl bg-[#f9dfbd]'><Eye /></button>
                <button className='cursor-pointer p-2 rounded-xl bg-blue-200'><Pen /></button>
                <button className='cursor-pointer p-2 rounded-xl bg-red-400'><Trash /></button>
            </div>
        </div>
    );
};

export default CoffeeCard;