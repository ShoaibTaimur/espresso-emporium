import { StepBack } from 'lucide-react';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
    const idOBJ = useParams();
    const navigate = useNavigate();
    const id = idOBJ.id;
    const [coffee, setCoffeeData] = useState([]);

    useEffect(() => {
        const loadData = async () => {
            try {
                const res = await fetch(`https://espresso-server.shoaaib.site/coffees/${id}`);
                const data = await res.json();
                setCoffeeData(data);
            } catch (error) {
                navigate("/error");
            }
        }
        loadData();
    }, [id, navigate]);

    const { _id, name, supplier, quantity, price, photo, taste, details, category } = coffee;

    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const updateCoffee = Object.fromEntries(formData.entries());

        fetch(`https://espresso-server.shoaaib.site/coffees/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updateCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    Swal.fire({
                        position: "top-end",
                        title: "Updated!",
                        text: "You Coffee is updated!",
                        icon: "success",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }
    return (
        <div>
            <div className='max-w-7xl mx-auto'>
                <Link to="/" className='flex absolute items-center gap-2 mb-5 rancho text-[20px] md:text-[30px]'><StepBack />Back to Home</Link>
                <div className='px-3 sm:px-15 lg:px-28 py-17.5 bg-[#F4F3F0] space-y-5'>
                    <div className='flex flex-col items-center gap-5'>
                        <h1 className="rancho text-[26px] md:text-[35px] text-shadow-xl font-normal text-[#374151]">
                            Update Coffee
                        </h1>
                    </div>
                    <form onSubmit={handleUpdate} className='md:grid md:grid-cols-2 gap-5'>
                        <div className='flex flex-col gap-3'>
                            <label className="label font-semibold">Name</label>
                            <input name='name' type="text" className="input w-full border-none" defaultValue={name} placeholder="Enter coffee name" />

                            <label className="label font-semibold">Supplier</label>
                            <input name='supplier' type="text" className="input border-none w-full" defaultValue={supplier} placeholder="Enter coffee supplier" />

                            <label className="label font-semibold">Category</label>
                            <input name='category' type="text" className="input border-none w-full" defaultValue={category} placeholder="Enter coffee category" />
                        </div>
                        <div className='flex flex-col gap-3'>
                            <label className="label font-semibold">Quantity</label>
                            <input name='quantity' type="text" className="input border-none w-full" defaultValue={quantity} placeholder="Enter coffee quantity" />

                            <label className="label font-semibold">Taste</label>
                            <input name='taste' type="text" className="input border-none w-full" defaultValue={taste} placeholder="Enter coffee taste" />

                            <label className="label font-semibold">Details</label>
                            <input name='details' type="text" className="input border-none w-full" defaultValue={details} placeholder="Enter coffee details" />
                        </div>
                        <div className='col-span-2 flex flex-col gap-3'>
                            <label className="label font-semibold">Photo</label>
                            <input name='photo' type="text" className="input border-none w-full" defaultValue={photo} placeholder="Enter Photo URL" />
                            <label className="label font-semibold">Price</label>
                            <input name='price' type="text" className="input border-none w-full" defaultValue={price} placeholder="Enter Price" />
                        </div>
                        <input type="submit" className="col-span-2 rancho mt-3 text-[20px] input w-full bg-[#D2B48C] cursor-grab" value="Update Coffee" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateCoffee;