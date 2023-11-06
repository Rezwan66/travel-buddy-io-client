import toast from 'react-hot-toast';
import useAxios from '../../hooks/useAxios';
import Swal from 'sweetalert2';

const TableRowPending = ({ booking, refetch }) => {
  const axios = useAxios();

  const { _id, service_name, service_img, user_email, date, status } =
    booking || {};
  //   console.log(Object.keys(booking).join(','));

  const handleStateChange = e => {
    console.log(e.target.value);
    console.log(_id);

    const status = { status: e.target.value };
    axios
      .patch(`/bookings/${_id}`, status)
      .then(res => {
        console.log(res.data);
        if (res?.data?.modifiedCount > 0) {
          Swal.fire({
            title: 'Success!',
            text: `Your Service Status has been updated to - ${status.status}.`,
            icon: 'success',
            confirmButtonText: 'Cool',
          });
          refetch();
        }
      })
      .catch(err => toast.error(err.message));
  };

  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-10 h-10">
              <img src={service_img} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{service_name}</div>
          </div>
        </div>
      </td>
      <td>{user_email}</td>
      <td>{date}</td>
      <td>
        {/* <button className="btn btn-ghost btn-xs">details</button> */}
        <form>
          <select
            defaultValue={status || 'Pending'}
            onChange={handleStateChange}
            className="input text-xs font-medium h-8 w-32 input-bordered"
            name="status"
          >
            <option>Pending</option>
            <option>In Progress</option>
            <option>Completed</option>
          </select>
        </form>
      </td>
    </tr>
  );
};
export default TableRowPending;
