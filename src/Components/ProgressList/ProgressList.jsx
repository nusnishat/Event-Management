import './ProgressList.css'

const ProgressList = () => {
    return (
        <div className='progress  rounded-none mx-auto text-center px-8 md:px-24'>
            <div className='pt-20 md:pt-24 lg:pt-16 '>
                <div className='grid  grid-cols-2 gap-4 md:grid-cols-4  text-white'>
                    <div>
                        <p className='font-bold text-4xl'>220</p>
                        <p className='text-2xl font-semibold'>Events</p>
                    </div>
                    <div>
                        <p className='font-bold text-4xl'>80</p>
                        <p className='text-2xl font-semibold'>Loyal Customers</p>
                    </div>git
                    <div>
                        <p className='font-bold text-4xl'>540</p>
                        <p className='text-2xl font-semibold'>Comments</p>
                    </div>
                    <div>
                        <p className='font-bold text-4xl'>6</p>
                        <p className='text-2xl font-semibold'>Awards</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProgressList;