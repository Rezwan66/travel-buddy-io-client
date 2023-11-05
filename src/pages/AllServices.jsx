import { Link } from 'react-router-dom';
import ServiceCard from '../components/Home/ServiceCard';
import useAxios from '../hooks/useAxios';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Spinner from '../components/Spinner';
import toast from 'react-hot-toast';

const Services = () => {
  // const axios = useAxios();
  const getServices = async () => {
    const res = await axios.get('/services.json');
    return res;
  };

  const {
    data: services,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['services'],
    queryFn: getServices,
  });

  console.log(services?.data);

  if (isLoading) {
    return <Spinner></Spinner>;
  }

  if (isError) {
    return toast.error(error.message);
  }

  return (
    <div>
      <div className="max-w-7xl mx-auto my-20 px-6 lg:px-0">
        {/* <h2 className="text-center text-xl font-semibold text-primary underline mb-8">
        {' '}
        Our Popular Services{' '}
      </h2> */}
        <div className="flex flex-wrap">
          <div className="w-full px-4">
            <div className="text-center mx-auto mb-10 lg:mb-20 max-w-[510px]">
              <span className="font-semibold text-lg text-secondary mb-2 block">
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
                All Our Services
              </h2>
              <p className="text-base text-body-color">
                Explore our Diverse Range of Services for Your Every Need,
                Tailored to Enhance Your Daily Life.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services?.data?.slice(0, 6).map(service => (
            <ServiceCard
              key={service.service_id}
              service={service}
            ></ServiceCard>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Link to="/services">
            <button className="btn btn-secondary">Show All</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Services;
