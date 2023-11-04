import { useLoaderData } from 'react-router-dom';
import Banner from '../components/Home/Banner';
import Services from '../components/Home/Services';
import Benefits from '../components/Home/Benefits';
import Newsletter from '../components/Home/Newsletter';

const Home = () => {
  const services = useLoaderData();
  console.log(services);
  return (
    <div>
      <Banner></Banner>
      <Services services={services}></Services>
      <Benefits></Benefits>
      <Newsletter></Newsletter>
    </div>
  );
};
export default Home;
