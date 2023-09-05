import Swal from "sweetalert2";

const ProductCard = ({ product }) => {
  const { name, img, price, seller, stock, id } = product;

  const handelerAddProdut = (id) => {
    // Display success message
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Add Successful!",
      showConfirmButton: false,
      timer: 1500,
    });

    // Get existing items from localStorage
    let existingItems = JSON.parse(localStorage.getItem("productId")) || [];

    // Check if the id already exists in the array
    if (!existingItems.includes(id)) {
      // If it doesn't exist, push it to the array
      existingItems.push(id);

      // Store the updated array back in localStorage
      localStorage.setItem("productId", JSON.stringify(existingItems));
    }
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
                {stock} Stock &bull; Manufacturer: {seller}
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
              className="py-2 px-4  bg-pink-600 hover:bg-pink-700 focus:ring-pink-500 focus:ring-offset-pink-200 text-white w-2/4 text-center transition ease-in duration-200  text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full"
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
