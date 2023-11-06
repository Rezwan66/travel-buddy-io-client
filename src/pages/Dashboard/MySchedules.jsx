import { useContext, useEffect, useState } from 'react';
import useAxios from '../../hooks/useAxios';
import toast from 'react-hot-toast';
import { AuthContext } from '../../providers/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../../components/Spinner';
import NoDataAnimation from '../../components/NoDataAnimation';
import TableRowBookings from '../../components/MySchedules/TableRowBookings';
import { Link } from 'react-router-dom';
import TableRowPending from '../../components/MySchedules/TableRowPending';

const MySchedules = () => {
  const [myBookings, setMyBookings] = useState([]);
  // const [bookingStatus, setBookingStatus] = useState('');
  const { user } = useContext(AuthContext);
  const axios = useAxios();

  // GET My-Bookings
  useEffect(() => {
    axios
      .get(`/bookings?userEmail=${user?.email}`)
      .then(res => {
        console.log(res.data);
        setMyBookings(res.data);
      })
      .catch(err => toast.error(err.message));
  }, [axios, user?.email]);

  // GET my pending work
  const getMyPendingWork = async () => {
    const res = await axios.get(`/bookings?providerEmail=${user?.email}`);
    return res;
  };

  // My Pending
  const {
    data: myPendingWork,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ['myPendingWork'],
    queryFn: getMyPendingWork,
  });

  console.log('my pending work', myPendingWork?.data);
  console.log('my bookings', myBookings);
  if (isLoading) {
    return <Spinner></Spinner>;
  }

  if (isError) {
    return toast.error(error.message);
  }

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-0 my-14">
      <div className="flex lg:flex-row flex-col rounded-lg gap-6">
        <div className="flex-1 bg-sky-100 shadow-xl rounded-xl py-6">
          {/* title */}
          <div className="flex flex-wrap">
            <div className="w-full px-4">
              <div className="text-center mx-auto mb-10 max-w-[510px]">
                <span className="font-semibold text-lg text-secondary mb-2 block">
                  Booking Schedule
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
                  My Bookings
                </h2>
                <p className="text-base text-body-color">
                  View all your bookings here.
                </p>
              </div>
            </div>
          </div>
          {/* My Bookings Table */}
          <div>
            <div className="overflow-x-auto mb-10">
              {myBookings?.length ? (
                <table className="table">
                  {/* head */}
                  <thead>
                    <tr className="text-center">
                      <th>Service</th>
                      <th>Provider Email</th>
                      <th>Date</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* row 1 */}
                    {myBookings?.map(booking => (
                      <TableRowBookings
                        key={booking._id}
                        booking={booking}
                      ></TableRowBookings>
                    ))}
                  </tbody>
                </table>
              ) : (
                <div className="flex flex-col justify-center gap-6">
                  <NoDataAnimation></NoDataAnimation>
                  <div className="flex justify-center">
                    <Link to="/all-services">
                      <button className="btn btn-secondary text-white">
                        Book Services
                      </button>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flex-1 bg-blue-100 shadow-xl rounded-xl py-6">
          {/* title */}
          <div className="flex flex-wrap">
            <div className="w-full px-4">
              <div className="text-center mx-auto mb-10 max-w-[510px]">
                <span className="font-semibold text-lg text-secondary mb-2 block">
                  Service Schedule
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
                  My Pending Work
                </h2>
                <p className="text-base text-body-color">
                  Confirm your provided services here.
                </p>
              </div>
            </div>
          </div>
          {/* My Pending Work Table */}
          <div>
            <div className="overflow-x-auto mb-10">
              {myPendingWork?.data?.length ? (
                <table className="table">
                  {/* head */}
                  <thead>
                    <tr className="text-center">
                      <th>Service</th>
                      <th>Booked By</th>
                      <th>Date</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* row 1 */}
                    {myPendingWork?.data?.map(booking => (
                      <TableRowPending
                        key={booking._id}
                        booking={booking}
                        refetch={refetch}
                      ></TableRowPending>
                    ))}
                  </tbody>
                </table>
              ) : (
                <div className="flex flex-col justify-center gap-6">
                  <NoDataAnimation></NoDataAnimation>
                  <div className="flex justify-center">
                    <Link to="/add-services">
                      <button className="btn btn-secondary text-white">
                        Add Services
                      </button>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MySchedules;
