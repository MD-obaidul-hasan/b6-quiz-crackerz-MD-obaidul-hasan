import React from 'react';
import { FaEye } from 'react-icons/fa';
import { toast } from 'react-toastify';


const Questions = ({ item, index }) => {
    const { question, options, correctAnswer } = item;

    const showCorrectAns = () => {
        toast.success(correctAnswer, { theme: "dark", });
    }

    const handleCheck = (option) => {
        if (correctAnswer === option) {
            toast.success('Correct Answer', { theme: "dark", });
        } else {
            toast.error('Wrong Answer', { theme: "dark", });
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