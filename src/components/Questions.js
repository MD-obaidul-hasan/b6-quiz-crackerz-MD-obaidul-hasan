import React from 'react';

const Questions = ({ item, index }) => {
    const { question, options, correctAnswer } = item;

    const handleCheck = (option) => {
        if (correctAnswer === option) {
            console.log('Correct Answer');
        } else {
            console.log('Wrong Answer');
        }
    }

    return (
        <div className="card-body">
            <p className='text-primary'><b> Question {index + 1}:</b> {question}</p>
            <div className='divider'></div>
            <div className="grid grid-cols-1 gap-3">
                {
                    options?.map(option => < div className='flex items-center'>
                        <input onClick={() => handleCheck(option)} type='radio' name='option' className='mr-2 radio' /> <span className='my-auto'>{option}</span>
                    </div>)
                }
            </div>
        </div >
    );
};

export default Questions;