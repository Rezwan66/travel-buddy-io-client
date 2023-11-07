import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import useAxios from '../../hooks/useAxios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';

const AddServices = () => {
  const { user } = useContext(AuthContext);
  const axios = useAxios();
  const navigate = useNavigate();

  const swalSuccess = () => {
    return Swal.fire({
      title: 'Success!',
      text: 'Your Service has been Posted.',
      icon: 'success',
      confirmButtonText: 'Cool',
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const email = user?.email;
    const price = parseInt(form.price.value);

    // service_img,
    // service_name,
    // provider_name,
    // provider_email,
    // provider_img,
    // price,
    // provider_location,
    // description,
    // provider_description,

    const service = {
      service_img: form.service_img.value || '',
      service_name: form.service_name.value,
      provider_name: user?.displayName,
      provider_email: email,
      provider_img: user?.photoURL || '',
      price: price,
      provider_location: form.provider_location.value || 'not-given',
      description: form.description.value || 'not-given',
      provider_description: form.provider_description.value || 'not-given',
    };
    console.log(service);

    axios
      .post('/services', service)
      .then(res => {
        console.log(res.data);
        if (res?.data?.insertedId) {
          swalSuccess();
          form.reset();
          navigate('/all-services');
        }
      })
      .catch(error => toast.error(error.message));
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 mb-14 px-6 lg:px-0">
      <Helmet>
        <title>TravelBuddy | Add Service</title>
      </Helmet>
      <div className="card w-full p-8 shadow-2xl bg-blue-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-secondary">
            Add Your Service
          </h1>
          <p className="pt-2 pb-6 italic text-sm">
            Share Your Expertise, Offer Your Services
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Service Photo URL</span>
              </label>
              <input
                type="text"
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
                name="service_name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                type="text"
                defaultValue={user?.displayName}
                name="provider_email"
                readOnly
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Email</span>
              </label>
              <input
                type="text"
                name="email"
                defaultValue={user?.email}
                readOnly
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price (in dollars $)</span>
              </label>
              <input
                type="number"
                name="price"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Service Area</span>
              </label>
              <input
                type="text"
                name="provider_location"
                className="input input-bordered"
              />
            </div>
            <div className="form-control md:col-span-2">
              <label className="label">
                <span className="label-text">Short Description</span>
              </label>
              <input
                type="text"
                name="description"
                className="input input-bordered"
              />
            </div>
            <div className="form-control md:col-span-2">
              <label className="label">
                <span className="label-text">About Yourself</span>
              </label>
              <input
                type="text"
                name="provider_description"
                className="input input-bordered"
              />
            </div>
          </div>
          <div className="form-control mt-10">
            <input
              className="btn btn-secondary btn-block text-white"
              type="submit"
              value="Add Service"
            />
          </div>
        </form>
      </div>
    </div>
  );
};
export default AddServices;
