import { FaEdit } from 'react-icons/fa';

const ServiceCard = ({ service, handleEdit, handleDelete }) => {
  const {
    _id,
    service_img,
    service_name,
    description,
    price,
    provider_name,
    provider_location,
    provider_description,
    provider_email,
    provider_img,
  } = service || {};

  //   const service = {
  //     service_img: form.service_img.value || 'not-given',
  //     service_name: form.service_name.value,
  //     provider_name: user?.displayName,
  //     provider_email: email,
  //     provider_img: user?.photoURL || 'not-given',
  //     price: price,
  //     provider_location: form.provider_location.value || 'not-given',
  //     description: form.description.value || 'not-given',
  //     provider_description: form.provider_description.value || 'not-given',
  //   };

  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img
            className="lg:h-full h-44 lg:w-48 w-full object-cover lg:rounded-l-lg"
            src={service_img}
            alt="Album"
          />
        </figure>
        <div className="card-body flex-row justify-between">
          <div className="space-y-4">
            <h2 className="card-title font-bold">{service_name}</h2>
            {/* <h2 className="font-medium">{description}</h2> */}
            <div className="flex items-center gap-3">
              <div className="avatar">
                <div className="w-4 h-4 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
                  <img src={provider_img} />
                </div>
              </div>
              <h2 className="font-medium">{provider_name}</h2>
            </div>
            <p className="text-sm mt-2">
              <strong>$Price:</strong> {price}
            </p>
          </div>

          {/* edit and delete btns */}
          <div className="space-y-4">
            {/* edit */}
            <div>
              {/* <button className="btn btn-secondary btn-block">Book Now</button> */}
              {/* modal */}
              {/* You can open the modal using document.getElementById('ID').showModal() method */}
              <button
                className="btn btn-secondary btn-outline btn-circle btn-sm"
                onClick={() =>
                  document.getElementById('my_modal_4').showModal()
                }
              >
                <FaEdit></FaEdit>
              </button>
              <dialog id="my_modal_4" className="modal">
                <div className="modal-box w-11/12 max-w-4xl bg-blue-50">
                  <h3 className="font-bold text-lg text-center text-secondary mb-2">
                    Edit Service!
                  </h3>
                  <div className="">
                    <form onSubmit={handleEdit} method="dialog">
                      {/* if there is a button, it will close the modal */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {/* _id */}
                        <div className="form-control hidden">
                          <label className="label">
                            <span className="label-text">Service ID</span>
                          </label>
                          <input
                            type="text"
                            defaultValue={_id}
                            name="_id"
                            className="input input-bordered"
                            readOnly
                          />
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">
                              Service Photo URL
                            </span>
                          </label>
                          <input
                            type="text"
                            defaultValue={service_img}
                            name="service_img"
                            className="input input-bordered"
                          />
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">Service Name</span>
                          </label>
                          <input
                            type="text"
                            defaultValue={service_name}
                            name="service_name"
                            required
                            className="input input-bordered"
                          />
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">Your Name</span>
                          </label>
                          <input
                            type="text"
                            defaultValue={provider_name}
                            name="provider_name"
                            className="input input-bordered"
                          />
                        </div>
                        {/* provider email readonly */}
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">Your Email</span>
                          </label>
                          <input
                            type="text"
                            name="email"
                            defaultValue={provider_email}
                            readOnly
                            className="input input-bordered"
                          />
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">Your Photo URL</span>
                          </label>
                          <input
                            type="text"
                            defaultValue={provider_img}
                            name="provider_img"
                            className="input input-bordered"
                          />
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">About Yourself</span>
                          </label>
                          <input
                            type="text"
                            defaultValue={provider_description}
                            name="provider_description"
                            className="input input-bordered"
                          />
                        </div>
                        {/* price */}
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">
                              Price of Service (in dollars $)
                            </span>
                          </label>
                          <input
                            type="number"
                            name="price"
                            defaultValue={price}
                            required
                            className="input input-bordered"
                          />
                        </div>
                        {/* area */}
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">Service Area</span>
                          </label>
                          <input
                            type="text"
                            defaultValue={provider_location}
                            name="provider_location"
                            className="input input-bordered"
                          />
                        </div>
                        <div className="form-control md:col-span-2">
                          <label className="label">
                            <span className="label-text">
                              Short Description
                            </span>
                          </label>
                          <input
                            type="text"
                            defaultValue={description}
                            name="description"
                            className="input input-bordered"
                          />
                        </div>
                      </div>
                      {/* submit btn */}
                      <div className="form-control mt-6">
                        <input
                          className="btn btn-secondary btn-block text-white"
                          type="submit"
                          value="Edit this Service"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
            {/* delete */}
            <div>
              <button
                onClick={() => handleDelete(_id)}
                className="btn btn-error btn-circle btn-outline btn-sm"
              >
                X
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ServiceCard;
