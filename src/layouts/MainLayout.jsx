import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';

const MainLayout = () => {
  return (
    // <div
    //   className="min-h-screen bg-opacity-20"
    //   style={{
    //     backgroundImage: 'url(/liquid-cheese.png)',
    //   }}
    // ></div>
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
    </div>
  );
};
export default MainLayout;
