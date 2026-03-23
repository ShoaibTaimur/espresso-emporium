import React from 'react';
import { Eye, Pen, Trash } from 'lucide-react';
import Swal from 'sweetalert2';
import { Link } from 'react-router';

const CoffeeCard = ({ coffee, setCoffeeData, coffeeData }) => {
    const { photo, name, supplier, price, _id } = coffee;
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://espresso-server.shoaaib.site/coffees/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.acknowledged) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Coffee has been deleted.",
                                icon: "success"
                            });

                            const remain=coffeeData.filter(coffee=>coffee._id!==_id);
                            setCoffeeData(remain);
                        }
                    })

            }
        });
    }
    return (
        <div className='bg-[#D2B48C]/20 rounded-xl flex justify-between pr-5 pl-2 py-3'>
            <div className='w-[30%] flex justify-center'>
                <img className='h-34.75' src={photo} alt="" />
            </div>
            <div className='flex flex-col justify-center w-[60%]'>
                <p className='raleway text-[#331A15] font-bold'>Name: <span className='font-light'>{name}</span></p>
                <p className='raleway text-[#331A15] font-bold'>Supplier: <span className='font-light'>{supplier}</span></p>
                <p className='raleway text-[#331A15] font-bold'>Price: <span className='font-light'>{price}</span></p>
            </div>
            <div className='flex flex-col justify-center gap-2 w-[10%]'>
                <Link to={`/coffees/${_id}`} className='cursor-pointer p-2 rounded-xl bg-[#f9dfbd] flex justify-center'><Eye /></Link>
                <Link to={`/updateCoffee/${_id}`} className='cursor-pointer p-2 rounded-xl bg-blue-200 flex justify-center'><Pen /></Link>
                <button onClick={() => handleDelete(_id)} className='cursor-pointer p-2 rounded-xl bg-red-400 flex justify-center'><Trash /></button>
            </div>
        </div>
    );
};

export default CoffeeCard;