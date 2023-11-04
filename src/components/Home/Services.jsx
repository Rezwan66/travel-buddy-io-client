import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Services = ({ services }) => {
  return (
    <div className="max-w-7xl mx-auto my-16">
      {/* <h2 className="text-center text-xl font-semibold text-primary underline mb-8">
        {' '}
        Our Popular Services{' '}
      </h2> */}
      <div className="flex flex-wrap -mx-4">
        <div className="w-full px-4">
          <div className="text-center mx-auto mb-10 lg:mb-20 max-w-[510px]">
            <span className="font-semibold text-lg text-primary mb-2 block">
              Our Services
            </span>
            <h2
              className="
                  font-bold
                  text-3xl
                  sm:text-4xl
                  md:text-[40px]
                  text-dark
                  mb-4
                  "
            >
              What&apos;s Popular
            </h2>
            <p className="text-base text-body-color">
              Take a look at some of our popular ride-sharing shuttle services,
              and book them directly.
            </p>
          </div>
        </div>
      </div>
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
