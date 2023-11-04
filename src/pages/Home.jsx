import { useLoaderData } from 'react-router-dom';
import Banner from '../components/Home/Banner';
import Services from '../components/Home/Services';

const Home = () => {
  const services = useLoaderData();
  console.log(services);
  return (
    <div>
      <Banner></Banner>
      <Services services={services}></Services>
    </div>
  );
};
export default Home;
