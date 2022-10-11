import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../../components/Questions';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Quiz = () => {
    const { data } = useLoaderData();

    return (
        <div className="hero min-h-screen bg-base-300 bg-right bg-no-repeat" style={{ backgroundImage: `url(${data?.logo})`, backgroundSize: '40%', }}>

            <div className="hero-content flex-col lg:flex-row p-0">

                <div className="text-center lg:text-right lg:p-10">
                    <h1 className="text-5xl font-bold">{data?.name}</h1>
                    <p style={{ whiteSpace: 'nowrap' }} className="py-6 badge my-4">Total Question: {data?.total}</p>
                </div>

                <div className='mt-0 divider'></div>

                <div className="max-w-sm lg:max-w-3xl w-full flex-shrink-0  shadow-2xl bg-base-100 rounded-2xl">
                    <Swiper
                        pagination={{
                            type: "fraction",
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="bg-base-100 rounded-2xl"
                    >
                        {
                            data?.questions?.map((item, index) => <SwiperSlide>
                                <div className="card bg-base-100 p-5">
                                    <Questions
                                        key={index}
                                        index={index}
                                        item={item}
                                    />
                                </div>
                            </SwiperSlide>
                            )
                        }
                    </Swiper>
                </div>

            </div>

        </div >
    );
};

export default Quiz;