import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ServiceCard = ({ service }) => {
  const {
    _id,
    service_img,
    service_name,
    description,
    provider_img,
    provider_name,
    provider_location,
    price,
  } = service || {};
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 25,
      }}
    >
      <div className="dark:bg-slate-700 max-h-[600px] relative flex flex-col rounded-xl bg-white bg-clip-border shadow-md">
        <div className="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-t-xl shadow-none bg-clip-border">
          <img
            className="w-full h-60 object-cover"
            src={service_img}
            alt="ui/ux review check"
          />
        </div>
        <div className="p-6">
          <div className="lg:flex lg:items-center lg:justify-between">
            <h4 className="block dark:text-white font-sans text-xl antialiased font-bold text-blue-gray-900">
              {service_name}
            </h4>
            <p className="block dark:text-white font-sans mt-3 lg:mt-0 text-lg italic font-bold text-secondary">
              Price: $ {price}
            </p>
          </div>
          <p className="block dark:text-white italic mt-1 text-sm font-sans antialiased font-normal leading-relaxed text-gray-700">
            <strong>Location:</strong> {provider_location}
          </p>
          <p className="block dark:text-white font-sans mt-3 antialiased font-normal leading-relaxed text-gray-700">
            {description}
          </p>
        </div>
        <div className="flex items-center justify-between p-6 pt-0">
          <div className="flex items-center gap-4">
            <div className="avatar">
              <div className="w-8 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
                <img src={provider_img} />
              </div>
            </div>
            <h2 className="italic text-secondary text-xs dark:text-white">
              {provider_name}
            </h2>
          </div>
          <motion.div
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.1, rotate: -5 }}
            transition={{
              type: 'spring',
              stiffness: 200,
              damping: 20,
            }}
          >
            <Link to={`/services/${_id}`}>
              <button className="btn btn-secondary btn-outline btn-sm capitalize">
                View Details
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
export default ServiceCard;
