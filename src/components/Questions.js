import React from 'react';

const Questions = () => {
    return (
        <div className="card-body">
            <p>Question 1: </p>
            <div className='divider'></div>
            <div className="grid grid-cols-1 gap-3">
                <div className='flex items-center'><input type='radio' name='option' className='mr-2 radio' /> <span className='my-auto'>Option 1</span></div>
            </div>
        </div>
    );
};

export default Questions;