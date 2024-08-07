import { useState } from 'react';
import { FaChartPie, FaPeopleArrows, FaPuzzlePiece } from 'react-icons/fa';

const WelcomeSection = () => {
    const [expanded, setExpanded] = useState({
        services: false,
        people: false,
        ideas: false,
      });
    
      const content = {
        services: `Ensure the smooth execution of various events. These services include event planning and coordination, venue selection and management, theme and decor design, catering arrangements, entertainment sourcing, and technical support for audio-visual equipment. Additionally, they handle logistics such as transportation, accommodation, and guest management. The company also provides marketing and promotional services, including branding, social media promotion, and public relations. `,
        people: `At the heart of our exceptional event management services is our team of talented and dedicated professionals. Each member of our team brings a wealth of experience and a passion for creating unforgettable experiences. From our visionary event planners and creative designers to our meticulous coordinators and technical experts, our people are committed to excellence. They work collaboratively to ensure every detail is perfectly executed, bringing your vision to life with precision and flair. .`,
        ideas: `Innovative thinking and creativity are at the core of what we do. Our "Great Ideas" section showcases how we transform unique concepts into extraordinary events. We thrive on brainstorming fresh and exciting ideas that capture your vision and elevate your event experience. Whether it’s a groundbreaking theme, cutting-edge technology, or inventive entertainment options, we excel at bringing imaginative ideas to life. By staying ahead of trends and embracing new possibilities, we ensure that each event is not only memorable but also stands out from the rest.`,
      };
      const isContentLong = (text) => text.length > 200;
    return (
        <div className='pt-24 pb-16  mx-auto text-center px-8 md:px-24'>
            <img className='mx-auto mb-6' src="/src/images/Home/ui-decor-1.png" alt="" />
            <h1 className='text-4xl mb-6 font-semibold'>Welcome To <span className='text-cyan-500'>DVENTS</span></h1>
            <p className='text-xl mb-24 max-w-4xl mx-auto'>From Wedding Functions to Birthday Parties or Corporate Events to Musical Functions,
            We offer full range of Events Management Services that scale to your needs & budget.</p>
            <div className='grid gap-8 grid-cols-1 md:grid-cols-3'>
            <div className='space-y-6 '>
                <span className='text-xl flex justify-center'><FaPuzzlePiece className='me-4 text-3xl text-cyan-500' /><p className='text-zinc-500 font-semibold mt-1'>Great Services</p></span>
                <p className='text-zinc-500 text-sm text-justify'>
                {isContentLong(content.services) && !expanded.services
                    ? content.services.slice(0, 200) + '...'
                    : content.services}
                {isContentLong(content.services) && (
                    <button
                    onClick={() => setExpanded({ ...expanded, services: !expanded.services })}
                    className="block mt-4 bg-cyan-500 text-sm px-4 py-2 text-white rounded-md font-semibold"
                    >
                    {expanded.services ? 'Read Less' : 'Read More'}
                    </button>
                )}
                </p>
                </div>
                <div className='space-y-6 '>
                    <span className='text-xl flex justify-center'><FaPeopleArrows className='me-4 text-3xl text-cyan-500' /><p className='text-zinc-500 font-semibold mt-1'>Great People</p></span>
                    <p className='text-zinc-500 text-sm text-justify'>
                    {isContentLong(content.people) && !expanded.people
                        ? content.people.slice(0, 200) + '...'
                        : content.people}
                    {isContentLong(content.people) && (
                        <button
                        onClick={() => setExpanded({ ...expanded, people: !expanded.people })}
                        className=" bg-cyan-500 text-sm block mt-4 px-4 py-2 text-white rounded-md font-semibold"
                        >
                        {expanded.people ? 'Read Less' : 'Read More'}
                        </button>
                    )}
                    </p>
                </div>
                <div className='space-y-6 '>
                     <span className='text-xl flex justify-center'><FaChartPie className='me-4 text-3xl text-cyan-500' /><p className='text-zinc-500 font-semibold mt-1'>Great Ideas</p></span>
                    <p className='text-zinc-500 text-sm text-justify'>
                    {isContentLong(content.ideas) && !expanded.ideas
                        ? content.ideas.slice(0, 200) + '...'
                        : content.ideas}
                    {isContentLong(content.ideas) && (
                        <button
                        onClick={() => setExpanded({ ...expanded, ideas: !expanded.ideas })}
                        className="block mt-4 text-sm bg-cyan-500 px-4 py-2 text-white rounded-md font-semibold"
                        >
                        {expanded.ideas ? 'Read Less' : 'Read More'}
                        </button>
                    )}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default WelcomeSection;