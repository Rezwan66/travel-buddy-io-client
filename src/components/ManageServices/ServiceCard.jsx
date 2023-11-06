const ServiceCard = ({ service, user, handleEdit }) => {
  const {
    _id,
    service_id,
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
            <div className="flex items-center gap-2">
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
                Edit
              </button>
              <dialog id="my_modal_4" className="modal">
                <div className="modal-box w-11/12 max-w-4xl">
                  <h3 className="font-bold text-lg text-center mb-4">
                    Book A Service!
                  </h3>
                  <div className="">
                    <form onSubmit={handleEdit} method="dialog">
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
                            <span className="label-text">
                              Service Photo URL
                            </span>
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
            <div>
              <button className="btn btn-error btn-circle btn-outline btn-sm">
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
