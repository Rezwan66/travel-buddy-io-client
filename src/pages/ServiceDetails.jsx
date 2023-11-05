import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
  const service = useLoaderData();
  //   console.log(Object.keys(service).join(','));
  const {
    _id,
    service_id,
    service_img,
    service_name,
    description,
    price,
    area,
    provider_name,
    provider_location,
    provider_description,
    provider_email,
    provider_img,
  } = service || {};
  return (
    <div className="my-14 max-w-5xl mx-auto px-6 lg:px-0">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img
            className="h-80 lg:w-72 w-full object-cover"
            src={service_img}
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <div className="flex gap-6">
            <div className="flex-1 space-y-6 border-r pr-2">
              <h2 className="card-title font-bold">Service:</h2>
              <div>
                <h2 className="font-medium">{service_name}</h2>
                <p className="text-sm mt-2">
                  <strong>$Price:</strong> {price}
                </p>
              </div>
              <p className="text-sm italic">{description}</p>
            </div>
            <div className="flex-1 space-y-6">
              <h2 className="card-title font-bold">Provider:</h2>
              <div className="flex md:flex-row flex-col-reverse justify-between gap-4">
                <div>
                  <h2 className="font-medium">{provider_name}</h2>
                  <p className="text-sm mt-2">
                    <strong>Area:</strong> {provider_location}
                  </p>
                </div>
                <div className="avatar mr-16">
                  <div className="w-8 h-8 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
                    <img src={provider_img} />
                  </div>
                </div>
              </div>
              <p className="text-sm italic">{provider_description}</p>
            </div>
          </div>
          <div className="mt-8">
            <button className="btn btn-secondary btn-block">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ServiceDetails;
