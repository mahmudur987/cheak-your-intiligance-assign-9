
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';






const Quizs = () => {
    const quizs = useLoaderData();
    const { id, name, questions } = quizs.data;
    const [rightCart, SetRightCart] = useState(0);
    const [wrongCart, SetwrongCart] = useState(0);

    const rightAnswer = (ans) => {
        console.log(ans);
        SetRightCart(rightCart + 1);
    }
    const wrongAnswer = (ans) => {
        console.log(ans);
        SetwrongCart(wrongCart + 1)
    }

    if (rightCart !== 0) {

    }
    if (wrongCart !== 0) {

    }
    console.log(rightCart, wrongCart)
    return (
        <div className='text-2xl  bg-slate-300 text-center '>
            <h1 className='text-3xl font-serif underline font-bold p-5'>Stage  {id}  </h1>
            <h1 className='font-bold text-red-900 border inline p-4 m-4 border-slate-800'>Quiz for <span className='text-red-500 text-3xl'>{name}</span></h1>
            <hr className='border border-black my-7' />

            <div className='flex flex-col-reverse   md:grid  md:grid-cols-6  gap-4 py-7'>

                <div className=' md:col-span-5 '>

                    {
                        questions.map(question => <Question
                            key={question.id}
                            questionss={question}
                            rightAnswer={rightAnswer}
                            wrongAnswer={wrongAnswer}
                        ></Question>)
                    }
                </div>
                <div className=' flex flex-col items-center justify-center h-64'>

                    <div className='border-4 border-black mb-10'>
                        <h1 className='text-2xl font-bold text-green-500 '>right answer</h1>
                        {rightCart}
                    </div>
                    <div className='border-4 border-black mt-10'>
                        <h1 className='text-2xl font-bold text-red-600 '>Wrong answer</h1>

                        {wrongCart}
                    </div>
                </div>
            </div>

        </div>


    );
};

export default Quizs;