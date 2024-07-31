
import { Link, useLocation, useNavigate } from 'react-router-dom';

import SercicesEvent from '../../Components/ServicesEvent';

const Services = () => {
  

  return (
    <div>
      <section className="event-banner py-16 flex items-center justify-center bg-gray-800 text-white">
        <div className="text-center">
          <h1 className="font-bold text-4xl mb-8">Services</h1>
          <p className="text-xl font-semibold">
            <Link to="/" className="text-cyan-500">Home</Link> / Services
          </p>
        </div>
      </section>
      <SercicesEvent></SercicesEvent>
    </div>
  );
};

export default Services;
