import { Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <h2> HELLO I Am Dashboard </h2>
      <Outlet></Outlet>
    </div>
  );
};
export default Dashboard;
