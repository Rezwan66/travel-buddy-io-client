const TableRowBookings = ({ booking }) => {
  const {
    _id,
    service_name,
    service_img,
    provider_email,
    user_email,
    date,
    price,
    instructions,
  } = booking || {};
  //   console.log(Object.keys(booking).join(','));
  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-8 h-8">
              <img src={service_img} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{service_name}</div>
          </div>
        </div>
      </td>
      <td>{provider_email}</td>
      <td>{date}</td>
      <td>
        <button className="btn btn-ghost btn-xs">details</button>
      </td>
    </tr>
  );
};
export default TableRowBookings;
