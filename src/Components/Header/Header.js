import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizTopics from '../QuizTopics/QuizTopics';


const Header = () => {
    const topics = useLoaderData().data;
    // console.log(topics)
    return (
        <div >
            <div className='my-9 p-7 bg-fuchsia-100'>
                <h1 className='text-2xl font-bold font-mono text-center'>There is a lot to know to be a good developer nowadays. Here are some questions for you to know how well you have learned your course. Test yourself. </h1>
                <h1 className='text-3xl font-extrabold  text-center my-5  text-red-900'> Are you ready ? </h1>
            </div>


            <div className=' grid  grid-cols-1 md:flex md:justify-around  '>
                {
                    topics.map(topic => <QuizTopics key={topic.id} topic={topic}></QuizTopics>)
                }
            </div>


        </div>
    );
};

export default Header;