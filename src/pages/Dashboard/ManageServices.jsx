import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import useAxios from '../../hooks/useAxios';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../../components/Spinner';
import toast from 'react-hot-toast';
import ServiceCard from '../../components/ManageServices/ServiceCard';
import Swal from 'sweetalert2';

const ManageServices = () => {
  const { user } = useContext(AuthContext);
  const axios = useAxios();

  const getMyServices = async () => {
    const res = await axios.get(`/services?email=${user?.email}`);
    return res;
  };

  const swalSuccess = () => {
    return Swal.fire({
      title: 'Success!',
      text: 'Successfully updated the Service.',
      icon: 'success',
      confirmButtonText: 'Cool',
    });
  };

  const {
    data: services,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['services'],
    queryFn: getMyServices,
  });

  console.log(services?.data);

  if (isLoading) {
    return <Spinner></Spinner>;
  }

  if (isError) {
    return toast.error(error.message);
  }

  // handle edit booking
  const handleEdit = e => {
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
    };
    console.log(booking);

    axios
      .post('/bookings', booking)
      .then(res => {
        console.log(res.data);
        if (res?.data?.insertedId) {
          swalSuccess();
          form.reset();
        }
      })
      .catch(error => toast.error(error.message));
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 mb-14 px-6 lg:px-0">
      {/* title */}
      <div className="flex flex-wrap">
        <div className="w-full px-4">
          <div className="text-center mx-auto mb-10 max-w-[510px]">
            <span className="font-semibold text-lg text-secondary mb-2 block">
              Your Services
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
              Manage Services
            </h2>
            <p className="text-base text-body-color">
              Edit or Delete your provided services here.
            </p>
          </div>
        </div>
      </div>
      <div>
        {services?.data?.map(service => (
          <ServiceCard
            key={service._id}
            service={service}
            user={user}
            handleEdit={handleEdit}
          ></ServiceCard>
        ))}
      </div>
    </div>
  );
};
export default ManageServices;
