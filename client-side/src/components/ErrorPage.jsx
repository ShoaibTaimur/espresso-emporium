import React from 'react';
import { StepBack } from 'lucide-react';
import { Link } from 'react-router';
import errorImg from "../../../assets/404/404.gif"

const ErrorPage = () => {
    return (
        <div>
            <Link to="/" className='flex items-center gap-2 mb-5 rancho text-[20px] md:text-[30px]'><StepBack />Back to Home</Link>
            <div className='flex justify-center items-center'>
                <img src={errorImg} alt="" />
            </div>
        </div>
    );
};

export default ErrorPage;