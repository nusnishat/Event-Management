import React from 'react';
import { FaDatabase } from 'react-icons/fa';
import { FaPeopleGroup } from 'react-icons/fa6';
import { MdLocationOn } from 'react-icons/md';
import { SlCalender } from 'react-icons/sl';

const Event = ({eventt}) => {
    const {name, description, date, location, attendees, image} = eventt;
    return (
        <div className='space-y-2 my-4 grid grid-cols-2 gap-4'>
            <div>
            <img src={image} alt="" />
            </div>
            <div>
                <h1 className='text-2xl  font-semibold'>{name}</h1>
                <p className='text-zinc-600'>{description}</p>
                <div className='flex '>
                    <SlCalender className=' me-2 mt-1 text-cyan-500 font-extrabold text-xl' />
                    <p className='text-md text-zinc-600'>{date}</p>
                </div>
                <div className='flex '>
                    <MdLocationOn className=' me-2 mt-1 text-cyan-500 font-extrabold text-xl' />
                    <p className='text-md text-zinc-600'>{location}</p>
                </div>
                <div className='flex '>
                    <FaPeopleGroup className=' me-2 mt-1 text-cyan-500 font-extrabold text-xl' />
                    <p className='text-md text-zinc-600'>Total {attendees}</p>
                </div>
            </div>
        </div>
    );
};

export default Event;