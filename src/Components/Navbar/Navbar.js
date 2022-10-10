import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='flex justify-between p-5  bg-emerald-300 rounded-md'>
            <h1 className='text-4xl font-serif font-bold text-orange-700'>Cheak your Intilligence</h1>
            <div className='flex items-center mr-4'>
                <Link className='font-bold text-cyan-700 m-4' to={'/'} >Home</Link>
                <Link className='font-bold text-cyan-700 m-4' to={'/statistics'} >Statistics</Link>
                <Link className='font-bold text-cyan-700 m-4' to={'/blog'} >Blog</Link>
            </div>
        </div>
    );
};

export default Navbar;