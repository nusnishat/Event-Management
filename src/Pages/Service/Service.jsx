
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { MdOutlineCloudDone, MdOutlineDone } from 'react-icons/md';
import { useLoaderData, useParams } from 'react-router-dom';


const Service = () => {
    const { id } = useParams();
    const services = useLoaderData();  // This assumes `services` is loaded via the loader
    const currentService = services.find(service => service.id==id);
    console.log(currentService);
    return (
        <div  className='text-justify'>
           <section className='event-banner py-16 flex items-center justify-center'>
                <div>
                    <h1 className='font-semibold text-5xl mb-8'>Services</h1>
                    <p className='text-2xl font-semibold'>
                        <span className='text-cyan-500'>Home</span> / {currentService.title}
                    </p>
                </div>
            </section>
            {/* service details */}
            <section className='px-8'>
                <div className="md:grid grid-cols-3 gap-8 mx-auto px-4 py-8">
                    <div className='col-span-2'>
                        <img className='w-full' src={currentService.image} alt="" />
                        <h1 className="text-md text-justify text-zinc-600 f mt-8">{currentService.description}</h1>
                        {/* package section */}
                        <section className="my-12">
                            <h2 className="text-3xl font-semibold mb-4">Packages</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                                {currentService.packages.map((pkg, index) => (
                                    <div key={index} className={` ${index!=1? 'bg-zinc-50':'bg-base-100' }  shadow-lg  border border-gray-200`}>
                                        <div className="card-body">
                                            <h3 className="text-2xl font-bold mb-2 text-cyan-500">{pkg.name}</h3>
                                            <p className="text-xl font-semibold mb-4">{pkg.price}</p>
                                            <ul className="list-disc pl-5 space-y-2 text-md text-zinc-600">
                                                {pkg.features.map((feature, idx) => (
                                                    <li key={idx}>{feature}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                    <div>
                        {/* what we do */}
                        <div className='bg-zinc-50 p-12'>
                            <h1 className='text-3xl font-semibold mb-2'>What We Do</h1>
                            <hr />
                            {currentService.whatWeDo.map((item, index) => (
                                    <div key={index} className='mt-4' >
                                        <p className='mt-2'><MdOutlineCloudDone className='text-cyan-500 text-2xl inline font-bold me-2' /><span className='mt-1 text-zinc-600  text-md'>{item}</span></p>
                                    </div>
                                ))
                            }
                        </div>
                        {/* how to book */}
                        <div className='bg-zinc-50 p-12 pb-24'>
                            <h1 className='text-3xl font-semibold mb-2'>How to book?</h1>
                            <hr />
                            <p className='my-6 text-zinc-600 font-semibold'>Booking your {currentService.title} with us is simple! Follow these steps to ensure a smooth and enjoyable process:</p>
                            {currentService.bookingSteps.map((item, index) => (
                                    <div key={index} className='mt-4 flex' >
                                        <FaArrowAltCircleRight className='text-cyan-500 text-2xl inline font-bold me-2' /><p className=' text-zinc-600  text-md'>{item}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    
                </div>
            </section>
        </div>
    );
};

export default Service;