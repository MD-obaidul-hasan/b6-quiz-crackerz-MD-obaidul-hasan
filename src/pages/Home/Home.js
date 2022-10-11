import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import bannerImg from '../../asset/banner.jpg'

const Home = () => {
    const { data } = useLoaderData();
    const navigate = useNavigate();

    return (
        <div>
            {/* banner  */}
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img className='w-80 rounded-lg' src={bannerImg} alt='' />
                    <div className='px-10 text-center lg:text-left'>
                        <h1 className="text-5xl font-bold">Test Your Brain !</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>

            {/* all quiz   */}
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-5 bg-base-300 p-10'>
                {
                    data?.map(item => <div className="card bg-base-100 shadow-xl hover:bg-base-200">
                        <figure><img className='bg-neutral' src={item?.logo} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{item?.name}</h2>
                            <p>Total Questions: {item.total}</p>
                            <div className="card-actions justify-end">
                                <button onClick={() => navigate(`/quiz/${item.id}`)} className='btn btn-primary'>Start Quiz</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Home;