import { useLoaderData } from 'react-router-dom';
import './Events.css';
import Event from '../../Components/Event/Event';
import { useState } from 'react';

const Events = () => {
    const events = useLoaderData();
    const [totalEvents, setTotalEvents] = useState(8);

    const handleShowMore = () => {
        setTotalEvents(events.length); // Increment by 2 or any number you prefer
    };

    return (
        <div>
            <section className='event-banner py-16 flex items-center justify-center'>
                <div>
                    <h1 className='font-semibold text-5xl mb-8'>Events</h1>
                    <p className='text-2xl font-semibold'>
                        <span className='text-cyan-500'>Home</span> / Events
                    </p>
                </div>
            </section>
            <section className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 px-12 py-20 mx-auto'>
                {events.slice(0, totalEvents).map(eventt => (
                    <Event key={eventt.id} eventt={eventt} />
                ))}
            </section>
            {totalEvents < events.length && (
                <div className='flex justify-center py-4'>
                    <button
                        onClick={handleShowMore}
                        className='bg-blue-500 text-white py-2 px-4 rounded'
                    >
                        Show More
                    </button>
                </div>
            )
        }
        </div>
    );
};

export default Events;
