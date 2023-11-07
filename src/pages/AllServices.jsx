import ServiceCard from '../components/Home/ServiceCard';
import useAxios from '../hooks/useAxios';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../components/Spinner';
import toast from 'react-hot-toast';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const Services = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showLimit, setShowLimit] = useState(6);
  const axios = useAxios();

  const getServices = async () => {
    const res = await axios.get(
      `/services?serviceName=${searchTerm}&showLimit=${showLimit}`
    );
    return res;
  };
  const handleSearch = e => {
    e.preventDefault();
    const searchTerm = e.target.search.value;
    setSearchTerm(searchTerm);
  };

  console.log(searchTerm);

  const {
    data: services,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['services', searchTerm, showLimit],
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
      <Helmet>
        <title>TravelBuddy | All Services</title>
      </Helmet>
      <div className="max-w-2xl mx-auto my-14 px-6 lg:px-0">
        {/* <h2 className="text-center text-xl font-semibold text-primary underline mb-8">
        {' '}
        Our Popular Services{' '}
      </h2> */}
        <div className="flex flex-wrap">
          <div className="w-full px-4">
            <div className="text-center mx-auto mb-10 max-w-[510px]">
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
        <div className="flex items-center gap-6 justify-center mb-8">
          <form onSubmit={handleSearch}>
            <div className="form-control">
              <div className="input-group">
                <input
                  type="text"
                  name="search"
                  placeholder="Search…"
                  className="input input-bordered"
                />
                <button type="submit" className="btn btn-square">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </form>
          <div>
            {searchTerm ? (
              <button
                className="text-secondary underline"
                onClick={() => setSearchTerm('')}
              >
                Show All
              </button>
            ) : (
              ''
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6">
          {services?.data?.map(service => (
            <ServiceCard
              key={service.service_id}
              service={service}
            ></ServiceCard>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          {showLimit ? (
            <button
              onClick={() => setShowLimit(0)}
              className="btn btn-secondary"
            >
              Show More
            </button>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
};
export default Services;
