import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner flex justify-center items-center">
           <div className='banner-content px-8 max-w-4xl text-white'>
            <h1 className='tracking-wider text-3xl md:text-6xl font-bold'>Celebrate Your Events <br /> That Lasts Longer</h1>
            <p className='mt-6 text-zinc-300 text-xl md:text-2xl'>
                From Wedding Functions to Birthday Parties or Corporate Events to Musical Functions,
                We offer full range of Events Management Services that scale to your needs & budget.
            </p>
           </div>
           
        </div>
    );
};

export default Banner;
