const ServiceCard = ({ service }) => {
  const {
    service_img,
    service_name,
    description,
    provider_img,
    provider_name,
    price,
  } = service || {};
  return (
    <div>
      <div className="relative flex flex-col rounded-xl bg-white bg-clip-border shadow-md">
        <div className="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-t-xl shadow-none bg-clip-border">
          <img src={service_img} alt="ui/ux review check" />
        </div>
        <div className="p-6">
          <h4 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            {service_name}
          </h4>
          <p className="block mt-3 font-sans antialiased font-normal leading-relaxed text-gray-700">
            {description}
          </p>
        </div>
        <div className="flex items-center justify-between p-6">
          <div className="flex items-center gap-4">
            <div className="avatar">
              <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={provider_img} />
              </div>
            </div>
            <h2 className="italic text-primary">{provider_name}</h2>
          </div>
          <button className="btn btn-primary btn-outline">View Details</button>
          <p className="block font-sans text-xl antialiased font-bold leading-relaxed text-inherit">
            Price: $ {price}
          </p>
        </div>
      </div>
    </div>
  );
};
export default ServiceCard;
