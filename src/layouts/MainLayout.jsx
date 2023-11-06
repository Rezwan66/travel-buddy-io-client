import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const MainLayout = () => {
  return (
    // <div
    //   className="min-h-screen bg-opacity-20"
    //   style={{
    //     backgroundImage: 'url(/liquid-cheese.png)',
    //   }}
    // ></div>
    <div className="bg-blue-50">
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};
export default MainLayout;
