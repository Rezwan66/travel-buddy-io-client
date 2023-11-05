const Newsletter = () => {
  return (
    <div className="max-w-7xl mx-auto mt-20">
      <div className="py-14 bg-white">
        <div className="container m-auto px-6 lg:px-0 space-y-8 text-gray-500 md:px-12">
          <div className="justify-center text-center gap-6 md:text-left md:flex lg:items-center lg:gap-16">
            <div className="order-last mb-6 space-y-6 md:mb-0 md:w-6/12 lg:w-6/12">
              <h1 className="text-4xl text-gray-700 font-bold md:text-5xl">
                Subscribe to our{' '}
                <span className="text-blue-500">Newsletter</span> today
              </h1>
              <p className="text-lg">
                Get news about our awesome services and industry specialists
                right in your inbox.
              </p>
              <div className="flex flex-row-reverse flex-wrap justify-center gap-4 md:gap-6 md:justify-end">
                <div className="join">
                  <input
                    className="input input-bordered join-item"
                    placeholder="Email"
                  />
                  <button className="btn btn-secondary join-item rounded-r-full">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-5 grid-rows-4 gap-4 md:w-5/12 lg:w-6/12">
              <div className="col-span-2 row-span-4">
                <img
                  src="https://i.imgur.com/L0h9jKz.jpg"
                  className="rounded-full"
                  width="640"
                  height="960"
                  alt="shoes"
                  loading="lazy"
                />
              </div>
              <div className="col-span-2 row-span-2">
                <img
                  src="https://i.imgur.com/Rwbca6P.jpg"
                  className="w-full h-full lg:h-72 object-cover object-top rounded-xl"
                  width="640"
                  height="640"
                  alt="shoe"
                  loading="lazy"
                />
              </div>
              <div className="col-span-3 row-span-3">
                <img
                  src="https://i.imgur.com/edmfsGm.jpg"
                  className="w-full h-full lg:w-60 lg:h-60 object-cover object-top rounded-xl"
                  width="640"
                  height="427"
                  alt="shoes"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Newsletter;
