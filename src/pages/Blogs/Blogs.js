import React from 'react';

const Blogs = () => {
    return (
        <div className='min-h-screen w-full lg:w-8/12 mx-auto mt-10'>
            <div tabIndex={0} className="collapse collapse-arrow border border-primary bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                what is the purpose of react router
                </div>
                <div className="collapse-content">
                    <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;