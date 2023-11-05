import Lottie from 'lottie-react';
import errorAnimation from '../assets/lottie/animation_error.json';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div>
      <NavBar></NavBar>
      {/* error animation */}
      <div className="my-14 flex lg:flex-row flex-col-reverse items-center justify-center gap-14 max-w-7xl mx-auto">
        <div className="">
          <Lottie animationData={errorAnimation} loop={true}></Lottie>
        </div>
        <div className="">
          <h2 className="text-5xl font-bold text-secondary">Oops</h2>
          <h2 className="text-2xl mt-4">An Error Ocurred!</h2>
          <div className="mt-8">
            <Link to="/" className="btn btn-secondary btn-outline">
              Go Back to the HomePage
            </Link>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};
export default ErrorPage;
