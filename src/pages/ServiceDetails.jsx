import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const ServiceDetails = () => {
  const service = useLoaderData();
  const { user } = useContext(AuthContext);
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

  const handleSubmit = e => {
    // e.preventDefault();
    const email = e.target.email.value;
    console.log(email);
  };

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
            {/* modal */}
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <button
              className="btn"
              onClick={() => document.getElementById('my_modal_4').showModal()}
            >
              open modal
            </button>
            <dialog id="my_modal_4" className="modal">
              <div className="modal-box w-11/12 max-w-4xl">
                <h3 className="font-bold text-lg text-center mb-4">
                  Book A Service!
                </h3>
                <div className="">
                  <form onSubmit={handleSubmit} method="dialog">
                    {/* if there is a button, it will close the modal */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Service</span>
                        </label>
                        <input
                          type="text"
                          defaultValue={service_name}
                          name="service_name"
                          readOnly
                          className="input input-bordered"
                        />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Service Photo URL</span>
                        </label>
                        <input
                          type="text"
                          defaultValue={service_img}
                          name="service_img"
                          readOnly
                          className="input input-bordered"
                        />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Provider Email</span>
                        </label>
                        <input
                          type="text"
                          defaultValue={provider_email}
                          name="provider_email"
                          readOnly
                          className="input input-bordered"
                        />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">User Email</span>
                        </label>
                        <input
                          type="text"
                          name="email"
                          defaultValue={user?.email}
                          placeholder="email"
                          readOnly
                          className="input input-bordered"
                        />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Service Date</span>
                        </label>
                        <input
                          type="date"
                          name="date"
                          className="input input-bordered"
                        />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Due amount</span>
                        </label>
                        <input
                          type="text"
                          defaultValue={'$ ' + price}
                          name="price"
                          className="input input-bordered"
                          readOnly
                        />
                      </div>
                      <div className="form-control col-span-2">
                        <label className="label">
                          <span className="label-text">
                            Special instructions
                          </span>
                        </label>
                        <input
                          type="text"
                          name="instructions"
                          className="input input-bordered"
                        />
                      </div>
                    </div>
                    <div className="form-control mt-6">
                      <input
                        className="btn btn-secondary btn-block text-white"
                        type="submit"
                        value="Purchase this Service"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ServiceDetails;
