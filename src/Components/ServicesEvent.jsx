import { Link } from 'react-router-dom';

const SercicesEvent = () => {
    const services = [
        {
            id:1,
            name:"Birthday party",
            url: 'https://i.ibb.co/C7RQm2N/birthday.jpg'
        },
        {
            id:2,
            name:"Wedding Ceremony",
            url: 'https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            id:3,
            name:"Corporate Seminar",
            url: 'https://images.pexels.com/photos/3321797/pexels-photo-3321797.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            id:4,
            name:"Musical Concert",
            url: 'https://images.pexels.com/photos/625644/pexels-photo-625644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        }
    ]
    return (
        <div className='pt-24 pb-32  mx-auto text-center px-8 md:px-24 bg-zinc-100'>
            <img className='mx-auto mb-6' src="/src/images/Home/ui-decor-1.png" alt="" />
            <h1 className='text-4xl mb-6 font-semibold'> <span className='text-cyan-500'>DVENTS</span> Services</h1>
            <p className='text-xl mb-8 max-w-4xl mx-auto'>We make your events smart & impactful by personalised event management services</p>
            <p className='text-zinc-500'>We offer a comprehensive range of event management services designed to meet the unique needs of every client. Whether you’re planning a grand celebration, an intimate gathering, or a corporate event, our expert team is here to ensure every detail is executed to perfection.</p>
            <div className='grid grid-cols-1 gap-y-8 gap-x-4   md:grid-cols-4 mt-20'>
            {services.map((service, index) => (
                <div key={index} className="card bg-base-100 shadow-xl">
                <figure>
                  <img
                    src={service.url} 
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{service.name}</h2>
                  <div className="card-actions">
                    <Link to={`/service/${service.id}`}>
                        <button className="font-medium text-cyan-500">Show Details</button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
            </div>
        </div>
    );
};

export default SercicesEvent;