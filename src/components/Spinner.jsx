import Lottie from 'lottie-react';
import loaderAnimation from '../assets/lottie/animation_lolguotf.json';

const Spinner = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <h2 className="text-7xl">L</h2>
      <div className="max-w-[250px]">
        <Lottie animationData={loaderAnimation} loop={true}></Lottie>
      </div>
      <h2 className="text-7xl">ading...</h2>
    </div>
  );
};
export default Spinner;
