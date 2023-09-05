const Banner = () => {
  return (
    <section>
      <main className="relative h-screen overflow-hidden bg-white dark:bg-gray-800">
        <div className="container relative flex px-6 py-16 mx-auto">
          <div className="flex flex-col sm:w-2/3 lg:w-2/4">
            <span className="w-20 h-2 mb-12 bg-gray-800 dark:bg-white"></span>
            <h1 className="flex flex-col text-6xl font-black leading-none text-gray-800 uppercase font-bebas-neue sm:text-8xl dark:text-white">
              Be on
              <span className="text-5xl sm:text-7xl">Time</span>
            </h1>
            <p className="text-sm text-gray-700 sm:text-base dark:text-white">
              Dimension of reality that makes change possible and
              understandable. An indefinite and homogeneous environment in which
              natural events and human existence take place.
            </p>
            <div className="flex mt-8">
              <button className="btn btn-outline btn-success">
                Get started
              </button>
              <button className="btn">Read more</button>
            </div>
          </div>
          <div className="hidden sm:block sm:w-1/3 lg:w-2/4">
            <img
              src="https://www.tailwind-kit.com/images/object/10.png"
              className="max-w-xs m-auto md:max-w-sm"
            />
          </div>
        </div>
      </main>
    </section>
  );
};

export default Banner;
