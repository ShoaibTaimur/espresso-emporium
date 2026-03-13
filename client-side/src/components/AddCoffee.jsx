import React from 'react';

const AddCoffee = () => {

    const handleSubmit=e=>{
        e.preventDefault();
        const name=e.target.name.value;
        const supplier=e.target.supplier.value;
        const category=e.target.category.value;
        const chef=e.target.chef.value;
        const taste=e.target.taste.value;
        const details=e.target.details.value;
        const photo=e.target.photo.value;
    }



    return (
        <div>
            <div className='px-3 sm:px-15 lg:px-28 py-17.5 bg-[#F4F3F0] space-y-5'>
                <div className='flex flex-col items-center gap-5'>
                    <h1 className="rancho text-[26px] md:text-[35px] text-shadow-xl font-normal text-[#374151]">
                        Add Coffee
                    </h1>
                    <p className='raleway opacity-40 text-center px-10 lg:px-20.5 text-[12px]'>
                        It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.
                    </p>
                </div>
                <form onSubmit={handleSubmit} className='md:grid md:grid-cols-2 gap-5'>
                    <div className='flex flex-col gap-3'>
                        <label className="label font-semibold">Name</label>
                        <input name='name' type="text" className="input w-full border-none" placeholder="Enter coffee name" />

                        <label className="label font-semibold">Supplier</label>
                        <input name='supplier' type="text" className="input border-none w-full" placeholder="Enter coffee supplier" />

                        <label className="label font-semibold">Category</label>
                        <input name='category' type="text" className="input border-none w-full" placeholder="Enter coffee category" />
                    </div>
                    <div className='flex flex-col gap-3'>
                        <label className="label font-semibold">Chef</label>
                        <input name='chef' type="text" className="input border-none w-full" placeholder="Enter coffee chef" />

                        <label className="label font-semibold">Taste</label>
                        <input name='taste' type="text" className="input border-none w-full" placeholder="Enter coffee taste" />

                        <label className="label font-semibold">Details</label>
                        <input name='details' type="text" className="input border-none w-full" placeholder="Enter coffee details" />
                    </div>
                    <div className='col-span-2 flex flex-col gap-3'>
                        <label className="label font-semibold">Photo</label>
                        <input name='photo' type="text" className="input border-none w-full" placeholder="Enter Photo URL" />
                    </div>
                    <input type="submit" className="col-span-2 rancho mt-3 text-[20px] input w-full bg-[#D2B48C]" value="Add Coffee"/>
                </form>
            </div>
        </div >
    );
};

export default AddCoffee;