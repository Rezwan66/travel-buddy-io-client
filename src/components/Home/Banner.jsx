// import Carousel from 'react-elastic-carousel';
// import Item from './Item';
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';

const Banner = () => {
  //   const breakPoints = [
  //     { width: 375, itemsToShow: 1, itemsToScroll: 1 },
  //     { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  //     { width: 1024, itemsToShow: 1, itemsToScroll: 1 },
  //   ];
  //   const items = [1];
  return (
    <div className="">
      {/* <Carousel itemsToShow={1} enableAutoPlay autoPlaySpeed={2500}>
        {items.map(item => (
          <div key={item.id}>{item.title}</div>
        ))}
      </Carousel> */}
      {/* <Carousel breakPoints={breakPoints}>
        {items.map(item => (
          <Item key={item}>{item}</Item>
        ))}
      </Carousel> */}
      {/* <Carousel
        itemsToShow={1}
        breakPoints={breakPoints}
        enableAutoPlay
        autoPlaySpeed={2500}
      >
        <Item>
          <img src="https://i.ibb.co/dfT2sFd/bannercar4.jpg" alt="" />
        </Item>
        <Item>2</Item>
        <Item>3</Item>
        <Item>4</Item>
      </Carousel> */}

      <div
        className="hero bg-blue-400 text-gray-900"
        style={{
          backgroundImage: 'url(https://i.imgur.com/ySCU6U5.jpg)',
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="container mx-auto max-w-7xl py-20">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            <div className="text-center text-white text-2xl tracking-normal font-bold">
              <h2>Join us TODAY</h2>
              {/* <span className="text-blue-800 text-6xl">50% Off</span> */}
              <Link to="/register">
                <button className="btn btn-secondary btn-block mt-4">
                  Sign Up
                </button>
              </Link>
            </div>
            <div className="space-x-2 text-center py-2 lg:py-0">
              <h2 className="md:text-3xl text-white font-medium">
                Find travel companions for{' '}
                <span className="text-primary font-bold">
                  <Typewriter
                    words={[
                      'Adventures!',
                      'Friendships!',
                      'Smiles!',
                      'Experiences!',
                    ]}
                    loop={0}
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  ></Typewriter>
                </span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
