import { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import useAxios from '../hooks/useAxios';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';
import OtherProductsCard from '../components/ServiceDetails/OtherProductsCard';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../components/Spinner';
import Lottie from 'lottie-react';
import noProductAnimation from '../assets/lottie/Animation - noProd.json';
import { Helmet } from 'react-helmet-async';

const ServiceDetails = () => {
  const service = useLoaderData();
  const { user } = useContext(AuthContext);
  const axios = useAxios();
  const navigate = useNavigate();
  //   console.log(Object.keys(service).join(','));
  const {
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

  const swalSuccess = () => {
    return Swal.fire({
      title: 'Success!',
      text: 'Thanks for Booking with Us.',
      icon: 'success',
      confirmButtonText: 'Cool',
    });
  };

  const handleSubmit = e => {
    // e.preventDefault();
    const form = e.target;
    const email = user?.email;
    const date = form.date.value;
    const instructions = form.instructions.value;
    // service_name
    // service_img
    // provider_email
    // user?.email
    // date
    // price
    // instructions

    console.log(email);
    const booking = {
      service_name,
      service_img,
      provider_email,
      user_email: email,
      date,
      price,
      instructions,
      status: 'Pending',
    };
    console.log(booking);

    if (booking?.user_email === booking?.provider_email) {
      return Swal.fire({
        title: 'Oops!',
        text: 'You cannot book your own service!',
        icon: 'error',
        confirmButtonText: 'Cool',
      });
    }

    axios
      .post('/bookings', booking)
      .then(res => {
        console.log(res.data);
        if (res?.data?.insertedId) {
          swalSuccess();
          form.reset();
          navigate('/my-schedules');
        }
      })
      .catch(error => toast.error(error.message));
  };

  const getOtherServices = async () => {
    const res = await axios.get(`/services?email=${provider_email}`);
    return res;
  };

  const {
    data: services,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['services'],
    queryFn: getOtherServices,
  });

  console.log(services?.data);

  if (isLoading) {
    return <Spinner></Spinner>;
  }

  if (isError) {
    return toast.error(error.message);
  }

  return (
    <div className="mt-6 mb-14 max-w-4xl mx-auto px-6 lg:px-0">
      <Helmet>
        <title>Service | {service_name}</title>
      </Helmet>
      {/* title */}
      <div className="flex flex-wrap mb-4">
        <div className="w-full px-4">
          <div className="text-center mx-auto mb-10 max-w-[510px]">
            <span className="font-semibold text-lg text-secondary mb-2 block">
              Service
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
              Service Details
            </h2>
            <p className="text-base text-body-color">Book a service here.</p>
          </div>
        </div>
      </div>
      {/* card + form */}
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img
            className="lg:h-80 h-60 lg:w-80 w-full object-cover"
            src={service_img}
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <div className="flex gap-6 md:flex-row flex-col">
            <div className="flex-1 space-y-2 md:border-r pr-2">
              <h2 className="card-title font-bold ">Service:</h2>
              <div>
                <h2 className="font-medium">{service_name}</h2>
                <p className="text-sm mt-2">
                  <strong>$Price:</strong> {price}
                </p>
              </div>
              <p className="text-sm italic">{description}</p>
            </div>
            <div className="flex-1 space-y-2">
              <h2 className="card-title font-bold">Provider:</h2>
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h2 className="font-medium">{provider_name}</h2>
                  <p className="text-sm mt-2">
                    <strong>Area:</strong> {provider_location}
                  </p>
                </div>
                <div className="avatar mr-8">
                  <div className="w-12 h-12  rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
                    <img src={provider_img} />
                  </div>
                </div>
              </div>
              <p className="text-sm italic">{provider_description}</p>
            </div>
          </div>
          {/* form modal */}
          <div className="mt-8">
            {/* <button className="btn btn-secondary btn-block">Book Now</button> */}
            {/* modal */}
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <button
              className="btn btn-secondary btn-block mt-8"
              onClick={() => document.getElementById('my_modal_4').showModal()}
            >
              Book Now
            </button>
            <dialog id="my_modal_4" className="modal">
              <div className="modal-box w-11/12 max-w-4xl bg-blue-50">
                <h3 className="font-bold text-lg text-center text-secondary">
                  Book A Service!
                </h3>
                <p className="text-xs text-right my-4 italic">
                  Press ESC to cancel!
                </p>
                <div className="">
                  <form onSubmit={handleSubmit} method="dialog">
                    {/* if there is a button, it will close the modal */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                      <div className="form-control md:col-span-2">
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
      {/* other products from this provider */}
      <div>
        <div className="mt-20">
          <h3 className="text-gray-600 text-2xl font-semibold">
            Other Services from this Provider
          </h3>
          <div>
            {services?.data.length <= 1 ? (
              <div>
                <h2 className="mt-6 italic">No more products at the moment!</h2>
                <div className="max-w-[200px]">
                  <Lottie
                    animationData={noProductAnimation}
                    loop={true}
                  ></Lottie>
                </div>
              </div>
            ) : (
              <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
                {services?.data.map(service => (
                  <OtherProductsCard
                    key={service._id}
                    service={service}
                  ></OtherProductsCard>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ServiceDetails;
