import { FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const OtherProductsCard = ({ service }) => {
  // console.log(Object.keys(service).join(','));
  const { _id, service_img, service_name, price } = service;

  return (
    <div>
      <div className="w-full max-w-sm h-80 mx-auto rounded-md shadow-md overflow-hidden">
        <div
          className="flex items-end justify-end h-56 w-full bg-cover"
          style={{
            backgroundImage: `url(${service_img})`,
          }}
        >
          <div className="mx-5 -mb-4">
            <Link to={`/services/${_id}`}>
              <button className="p-2 rounded-full bg-blue-600 text-white  hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                <FaEye></FaEye>
              </button>
            </Link>
          </div>
        </div>
        <div className="px-5 mt-6">
          <h3 className="text-gray-700 uppercase text-sm font-semibold">
            {service_name}
          </h3>
          <span className="text-gray-500 mt-2">${price}</span>
        </div>
      </div>
    </div>
  );
};
export default OtherProductsCard;
