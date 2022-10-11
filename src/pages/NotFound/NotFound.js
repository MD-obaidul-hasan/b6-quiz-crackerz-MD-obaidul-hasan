import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className=' min-h-screen flex flex-col justify-center items-center'>
            <h1 className='text-9xl text-red-500'>404</h1>
            <p className='text-2xl mb-10'>Not Found Page</p>
            <Link to='/' className='btn btn-link'>Go back to homepage</Link>
        </div>
    );
};

export default NotFound;