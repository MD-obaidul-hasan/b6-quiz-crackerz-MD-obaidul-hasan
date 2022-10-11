import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../../components/Questions';

const Quiz = () => {
    const { data } = useLoaderData();

    return (
        <div className="hero min-h-screen bg-base-300 bg-right bg-no-repeat" style={{ backgroundImage: `url(${data?.logo})`, backgroundSize: '40%', }}>

            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-right lg:p-10">
                    <h1 className="text-5xl font-bold">React</h1>
                    <p className="py-6">Total Question: </p>
                </div>
                <div className='mt-0 divider'></div>

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <Questions />
                </div>

            </div>

        </div>
    );
};

export default Quiz;