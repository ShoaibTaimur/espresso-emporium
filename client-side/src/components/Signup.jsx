import React from 'react';
import { use } from 'react';
import { AuthContext } from '../Context/AuthContext';
import Swal from "sweetalert2";

const Signup = () => {
    const { createUser } = use(AuthContext);

    const handleSignup = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);

        const { email, password, ...rest } = Object.fromEntries(formData.entries());
        const userProfile={
            email,
            ...rest
        }

        // const email=formData.get("email");
        // const password=formData.get("password");
        createUser(email, password)
            .then(result => {
                fetch("https://espresso-server.shoaaib.site/users", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(userProfile)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "Your profile has been saved",
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    })
            });
    }


    return (
        <div className='flex flex-col justify-center items-center min-h-screen '>
            <h1 className='rancho text-[60px] text-[#331A15]'>Sign Up Now!</h1>
            <div className="card bg-base-100 mx-auto w-150 shadow-2xl">
                <div className="card-body">
                    <form onSubmit={handleSignup} className="fieldset">
                        <label className="label raleway">Name</label>
                        <input name='name' type="text" className="input w-full" placeholder="name" />
                        <label className="label raleway">Address</label>
                        <input name='address' type="text" className="input w-full" placeholder="address" />
                        <label className="label raleway">Phone</label>
                        <input name='phone' type="text" className="input w-full" placeholder="Phone number" />
                        <label className="label raleway">Photo</label>
                        <input name='photo' type="text" className="input w-full" placeholder="photo URL" />

                        <label className="label raleway">Email</label>
                        <input name='email' type="email" className="input w-full" placeholder="Email" />
                        <label className="label raleway">Password</label>
                        <input name='password' type="password" className="input w-full" placeholder="Password" />
                        <button className="btn btn-neutral mt-4 bg-[#331A15]">Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;