import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
  const {
    _id,
    service_img,
    service_name,
    description,
    provider_img,
    provider_name,
    price,
    area,
  } = service || {};
  return (
    <div>
      <div className="max-h-[600px] relative flex flex-col rounded-xl bg-white bg-clip-border shadow-md">
        <div className="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-t-xl shadow-none bg-clip-border">
          <img
            className="w-full h-80 object-cover"
            src={service_img}
            alt="ui/ux review check"
          />
        </div>
        <div className="p-6">
          <div className="lg:flex lg:items-center lg:justify-between">
            <h4 className="block font-sans text-xl antialiased font-bold text-blue-gray-900">
              {service_name}
            </h4>
            <p className="block font-sans mt-3 lg:mt-0 text-lg italic font-bold text-secondary">
              Price: $ {price}
            </p>
          </div>
          <p className="block italic mt-1 text-sm font-sans antialiased font-normal leading-relaxed text-gray-700">
            <strong>Location:</strong> {area}
          </p>
          <p className="block font-sans mt-3 antialiased font-normal leading-relaxed text-gray-700">
            {description}
          </p>
        </div>
        <div className="flex items-center justify-between p-6">
          <div className="flex items-center gap-4">
            <div className="avatar">
              <div className="w-8 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
                <img src={provider_img} />
              </div>
            </div>
            <h2 className="italic text-secondary text-xs">{provider_name}</h2>
          </div>
          <div>
            <Link to={`/services/${_id}`}>
              <button className="btn btn-secondary btn-outline btn-sm capitalize">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ServiceCard;
