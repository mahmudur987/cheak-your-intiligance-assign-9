
import React from 'react';
import parse from 'html-react-parser';
import Option from '../Options/Option';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Question = ({ questionss, rightAnswer, wrongAnswer }) => {
    const { question, options, correctAnswer } = questionss;

    const notify1 = () => toast("Your answer is right !");
    const notify2 = () => toast("Your answer is wrong !");


    const answer = (ans) => {

        if (ans === correctAnswer) {
            notify1()
            rightAnswer(ans)
        }
        else {
            notify2()
            wrongAnswer(ans);

        }
    }

    return (
        <div>

            <h1 className='text-2xl font-bold text-start m-3'>{parse(question)}</h1>
            <div>
                <h1 className='font-bold text-start m-2'>Choose the correct answer</h1>

                <div className=' grid grid-cols-1 md:grid-cols-2 gap-3 mx-4'>
                    {
                        options.map((option, idx) => <Option key={idx} option={option} answer={answer}></Option>)
                    }
                </div>
            </div>
            <div className='text-4xl'>
                <ToastContainer
                    position="top-center"
                    autoClose={2000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />

            </div>
        </div>
    );
};

export default Question;