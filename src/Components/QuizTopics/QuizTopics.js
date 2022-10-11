import React from 'react';
import { Link } from 'react-router-dom';

const QuizTopics = ({ topic }) => {
    // console.log(topic)
    const { name, logo, id } = topic
    return (
        <div className="card card-compact m-4 bg-base-100 shadow-xl">
            <figure><img src={logo ? logo : 'https://miro.medium.com/max/910/1*Wjxx83j-qyiNvFBy1yOA1w.jpeg'} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <div className="card-actions justify-end">
                    <Link to={`/quizs/${id}`}><button className="btn btn-primary">Start Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default QuizTopics;