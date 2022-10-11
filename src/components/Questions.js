import React from 'react';
import { FaEye } from 'react-icons/fa';

const Questions = ({ item, index }) => {
    const { question, options, correctAnswer } = item;

    const showCorrectAns = () => {

    }

    const handleCheck = (option) => {
        if (correctAnswer === option) {
            console.log('Correct Answer');
        } else {
            console.log('Wrong Answer');
        }
    }

    return (
        <div className="card-body">
            <div className='flex justify-end'>
                <span className="tooltip tooltip-left" data-tip="Show Correct Answer">
                    <FaEye onClick={() => showCorrectAns()} className="w-6 h-6 text-white hover:text-primary " />
                </span>
            </div>
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