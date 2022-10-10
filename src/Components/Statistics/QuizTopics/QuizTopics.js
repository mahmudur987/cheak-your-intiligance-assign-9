import React from 'react';

const QuizTopics = ({ topic }) => {
    console.log(topic)
    const { name, logo } = topic
    return (
        <div className="card card-compact m-4 bg-base-100 shadow-xl">
            <figure><img src={logo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Start Now</button>
                </div>
            </div>
        </div>
    );
};

export default QuizTopics;