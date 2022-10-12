import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';


const data = [
    {
        name: 'start',
        uv: 0,

    },
    {
        name: 'React',
        uv: 8,

    },
    {
        name: 'Java script',
        uv: 9,

    },
    {
        name: 'CSS',
        uv: 8,

    },
    {
        name: 'GIT',
        uv: 11,

    },
    {
        name: 'BOOTSTRAP',
        uv: 18,


    },
    {
        name: 'tAILWIND',
        uv: 23,


    },
    {
        name: 'OTHER',
        uv: 34,

    },
];
const Statistics = () => {
    return (

        <LineChart className=' p-10 text-3xl'
            width={1200}
            height={600}
            data={data}
            margin={{
                top: 30,
                right: 10,
                left: 20,
                bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray="#ccc" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />

            <Line className=' border-4 border-red-600' type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>

    );
};

export default Statistics;