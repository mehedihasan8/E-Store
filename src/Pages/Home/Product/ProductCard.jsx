const ProductCard = ({ product }) => {
  const { name, img, price, seller, stock, id } = product;

  const handelerAddProdut = (id) => {
    let existingItems = JSON.parse(localStorage.getItem("productId")) || [];
    if (!Array.isArray(existingItems)) {
      existingItems = [];
    }
    existingItems.push(id);

    localStorage.setItem("productId", JSON.stringify(existingItems));
  };

  return (
    <div className="text-gray-900 ">
      <div className="bg-gray-200 border border-red-500 flex items-center justify-center">
        <div className="rounded-lg bg-gray-200 overflow-hidden shadow-2xl w-full">
          <img
            className="h-48 w-full object-cover"
            src={img}
            alt="Home in Countryside"
          />
          <div className="p-6 bg-gray-200 ">
            <div className="flex items-baseline">
              <span className="inline-block bg-teal-200 text-teal-800 py-1 px-4 text-xs rounded-full uppercase font-semibold tracking-wide">
                New
              </span>
              <div className="ml-2 text-gray-600 text-xs uppercase font-semibold tracking-wide">
                {stock} Stock &bull; {seller}
              </div>
            </div>
            <h4 className="mt-2 font-semibold text-lg leading-tight truncate">
              {name}
            </h4>

            <p className="mt-1">${price}</p>
            <div className="mt-2 flex items-center">
              <span className="text-teal-600 font-semibold"></span>
              <span>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
              </span>

              <span className="ml-2 text-gray-600 text-sm">34 reviews</span>
            </div>
            <button
              onClick={() => handelerAddProdut(id)}
              className="btn btn-active btn-neutral"
            >
              Add to Card
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
