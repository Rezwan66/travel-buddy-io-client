import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Services = ({ services }) => {
  return (
    <div className="max-w-7xl mx-auto my-16">
      <h2 className="text-center underline text-3xl font-semibold text-secondary mb-8">
        {' '}
        Our Popular Services{' '}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services?.slice(0, 4).map(service => (
          <ServiceCard key={service.service_id} service={service}></ServiceCard>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <Link to="/services">
          <button className="btn btn-secondary">Show All</button>
        </Link>
      </div>
    </div>
  );
};
export default Services;
