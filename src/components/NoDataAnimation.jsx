import Lottie from 'lottie-react';
import noData from '../assets/lottie/Animation - nodata.json';

const NoDataAnimation = () => {
  return (
    <div className="max-w-[350px] mx-auto">
      <Lottie animationData={noData} loop={true}></Lottie>
    </div>
  );
};
export default NoDataAnimation;
