
const EventsGallery = () => {
    return (
        <div className='py-16  mx-auto text-center '>
            <img className='mx-auto mb-6' src="/src/images/Home/ui-decor-1.png" alt="" />
            <h1 className='text-4xl mb-6 font-semibold'><span className='text-cyan-500'>DEVENTS</span> Gallery</h1>
            <p className='text-xl mb-24 max-w-4xl mx-auto'>We make your events smart & impactful by personadivsed event management services.</p>
            <div className='grid grid-cols-1 md:grid-cols-4'>
                <div>
                    <img src="/src/images/Home/1-3.jpg" alt="" />
                </div>
                <div>
                    <img src="/src/images/Home/2-1.jpg" alt="" />
                </div>
                <div>
                    <img src="/src/images/Home/5-1.jpg" alt="" />
                </div>
                <div>
                    <img src="/src/images/Home/6-1.jpg" alt="" />
                </div>
                <div>
                    <img src="/src/images/Home/7-1.jpg" alt="" />
                </div>
                <div>
                    <img src="/src/images/Home/8.jpg" alt="" />
                </div>
                <div>
                    <img src="/src/images/Home/4-1.jpg" alt="" />
                </div>
                <div>
                    <img src="/src/images/Home/3-1.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default EventsGallery;