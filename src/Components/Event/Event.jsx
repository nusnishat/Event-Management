import React from 'react';
import { FaUserFriends, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

const Event = ({ eventt }) => {
    const { name, description, date, location, attendees, image } = eventt;

    return (
        <div className='bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105'>
            <div className='flex flex-col md:flex-row'>
                <div className='md:w-1/3'>
                    <img
                        src={image}
                        alt={name}
                        className='w-full h-64 object-cover border-b md:border-b-0 md:border-r'
                    />
                </div>
                <div className='px-4 py-2 flex-1'>
                    <h1 className='text-xl font-bold mb-2 text-gray-900'>{name}</h1>
                    <p className='text-gray-700 mb-4'>{description}</p>
                    <div className='flex items-center text-sm mb-2'>
                        <FaCalendarAlt className='text-cyan-600 text-md me-3' />
                        <p className='text-gray-800'>{date}</p>
                    </div>
                    <div className='flex items-center text-sm mb-2'>
                        <FaMapMarkerAlt className='text-cyan-600 text-md me-3' />
                        <p className='text-gray-800'>{location}</p>
                    </div>
                    <div className='flex items-center text-sm'>
                        <FaUserFriends className='text-cyan-600 text-md me-3' />
                        <p className='text-gray-800'>Total {attendees}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Event;
