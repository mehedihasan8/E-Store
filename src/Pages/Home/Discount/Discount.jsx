const Discount = () => {
  return (
    <div className="p-6 py-12 bg-violet-400 text-gray-900">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <h2 className="text-center text-6xl tracki font-bold">
            Up to
            <br /> 50% Off
          </h2>
          <div className="space-x-2 text-center py-2 lg:py-0">
            <span>Plus free shipping! Use code:</span>
            <span className="font-bold text-lg">Local E-Store##</span>
          </div>
          <button className="py-3 px-6  bg-pink-600 hover:bg-pink-700 focus:ring-pink-500 focus:ring-offset-pink-200 text-white w-36 text-center transition ease-in duration-200  text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full">
            Shop Naw
          </button>
        </div>
      </div>
    </div>
  );
};

export default Discount;
