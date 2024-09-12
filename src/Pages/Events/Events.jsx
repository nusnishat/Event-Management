import { useLoaderData } from 'react-router-dom';
import './Events.css';
import Event from '../../Components/Event/Event';
import { useState } from 'react';

const Events = () => {
    const events = useLoaderData();
    const [totalEvents, setTotalEvents] = useState(6);

    const handleShowMore = () => {
        setTotalEvents(events.length); // Increment by 2 or any number you prefer
    };

    return (
        <div className=''>
            <section className='event-banner py-16  flex items-center justify-center'>
                <div>
                    <h1 className='font-semibold text-4xl mb-8'>Events</h1>
                    <p className='text-2xl font-semibold'>
                        <span className='text-cyan-500'>Home</span> / Events
                    </p>
                </div>
            </section>
            <section className='mx-auto text-center px-8 md:px-20 pt-24 bg-zinc-100'>
            <img className='mx-auto mb-6' src="/src/images/Home/ui-decor-1.png" alt="" />
            <h1 className='text-4xl mb-6 font-semibold'> <span className='text-cyan-500'>DVENTS</span> Events</h1>
            <p className='text-xl mb-8 max-w-4xl mx-auto'>We make your events smart & impactful by personalised event management services</p>
            <p className='text-zinc-500'>From grand weddings and joyful birthdays to impactful conferences and vibrant social gatherings, our team has been dedicated to making every occasion unforgettable. Each event showcases our commitment to excellence and our passion for bringing people together in extraordinary ways. We hope these highlights inspire you as you plan your next event with us!</p>

            </section>
            <section className='bg-zinc-100 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-8 md:px-20 py-20 mx-auto'>
                {events.slice(0, totalEvents).map(eventt => (
                    <Event key={eventt.id} eventt={eventt} />
                ))}
            </section>
            {totalEvents < events.length && (
                <div className='flex justify-center pb-20 bg-zinc-100'>
                    <button
                        onClick={handleShowMore}
                        className='bg-cyan-500 text-white py-2 px-4 rounded'
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
