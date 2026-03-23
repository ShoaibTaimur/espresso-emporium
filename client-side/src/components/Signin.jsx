import React from 'react';
import { use } from 'react';
import { AuthContext } from '../Context/AuthContext';

const Signin = () => {
    const {signInUser}=use(AuthContext);

    const handleSignuIn=e=>{
        e.preventDefault();
        const form=e.target;
        const email=form.email.value;
        const password=form.password.value;
        signInUser(email,password)
        .then(result=>{
            console.log(result.user);
        })
        .catch(error=>{
            console.log(error);
        })
    }

    return (
        <div className='flex flex-col justify-center items-center min-h-screen '>
            <h1 className='rancho text-[60px] text-[#331A15]'>Sign In Now!</h1>
            <div className="card bg-base-100 mx-auto w-150 shadow-2xl">
                <div className="card-body">
                    <form onSubmit={handleSignuIn} className="fieldset">
                        <label className="label raleway">Email</label>
                        <input name='email' type="email" className="input w-full" placeholder="Email" />
                        <label className="label raleway">Password</label>
                        <input name='password' type="password" className="input w-full" placeholder="Password" />
                        <button className="btn btn-neutral mt-4 bg-[#331A15]">Sign in</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signin;