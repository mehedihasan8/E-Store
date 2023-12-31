const Banner = () => {
  return (
    <section>
      <main className="bg-gray-100">
        <div className="container md:flex px-6 py-16 mx-auto items-center">
          <div className="flex flex-col sm:w-2/3 lg:w-2/4">
            <span className="w-20 h-2 mb-12 bg-gray-800"></span>
            <h1 className="flex flex-col text-6xl font-black leading-none text-gray-800 uppercase font-bebas-neue sm:text-8xl">
              Be on
              <span className="text-5xl sm:text-7xl">Time</span>
            </h1>
            <p className="text-sm text-gray-700 sm:text-base">
              Dimension of reality that makes change possible and
              understandable. An indefinite and homogeneous environment in which
              natural events and human existence take place.
            </p>
            <div className="flex mt-4">
              <button className="py-2 px-4  bg-pink-600 hover:bg-pink-700 focus:ring-pink-500 focus:ring-offset-pink-200 text-white w-1/3 mt-4 text-center transition ease-in duration-200  text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full">
                Get started
              </button>
            </div>
          </div>
          <div className="lg:w-2/4 mt-10 md:mt-0 md:ml-10">
            <img
              src="https://www.tailwind-kit.com/images/object/10.png"
              className="max-w-xs h-80 md:h-full m-auto md:max-w-sm"
            />
          </div>
        </div>
      </main>
    </section>
  );
};

export default Banner;
