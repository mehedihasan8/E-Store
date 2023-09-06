import Swal from "sweetalert2";
import useCard from "../../Hooks/useCard";
import { FaTrashAlt } from "react-icons/fa";
import { useEffect, useState } from "react";

const Order = () => {
  const product = useCard();
  const [total, setTotal] = useState(0);
  const [totalShipping, setTotalShipping] = useState(0);

  useEffect(() => {
    const total = product.reduce((total, price) => total + price.price, 0) || 0;
    setTotal(total);
  }, [product]);

  useEffect(() => {
    const totalShipping =
      product.reduce(
        (totalShipping, shipping) => totalShipping + shipping.shipping,
        0
      ) || 0;
    setTotalShipping(totalShipping);
  }, [product]);

  const totalPrice = total + totalShipping;
  const tax = (totalPrice * 10) / 100;
  const grandTotal = totalPrice + tax;

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const idToDelete = id;

        const existingIds = JSON.parse(localStorage.getItem("productId")) || [];

        const updatedIds = existingIds.filter((id) => id !== idToDelete);

        localStorage.setItem("productId", JSON.stringify(updatedIds));

        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your Product Delete Successful!",
          showConfirmButton: false,
          timer: 1500,
        });

        // console.log("ID deleted from localStorage:", idToDelete);
      }
    });
  };

  return (
    <div className=" w-3/4 mx-auto mt-16">
      <div className="">
        <table className="table  bg-slate-300 w-[70%] rounded-none">
          {/* head */}
          <thead>
            <tr>
              <th className="font-semibold">No</th>
              <th className="font-semibold">img</th>
              <th className="font-semibold">Product Name</th>
              <th className="font-semibold">Price</th>
              <th className="font-semibold">Shipping</th>
              <th className="font-semibold">Remove</th>
            </tr>
          </thead>
          <tbody>
            {product?.map((item, index) => (
              <tr key={item.id}>
                <td className="font-semibold">{index + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={item.img} alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                </td>
                <td className="font-semibold">{item.name}</td>
                <td className="font-semibold">${item.price}</td>
                <td className="font-semibold">${item.shipping}</td>

                <td>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="btn btn-ghost bg-pink-600 hover:bg-pink-700 text-white"
                  >
                    <FaTrashAlt></FaTrashAlt>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="w-[25%] bg-[#e6a749] p-8 fixed top-16 right-0">
          <h4 className=" font-semibold text-2xl">Order Summary</h4>
          <hr className="border-2 mt-4" />
          <p className="pt-4 font-semibold">Selected Items: {product.length}</p>
          <p className="pt-4 font-semibold">Total Price: ${total}</p>
          <p className="pt-4 font-semibold">Total Shipping: ${totalShipping}</p>
          <p className="pt-4 font-semibold">Tax: ${tax.toFixed(2)}</p>
          <h6 className="font-semibold text-lg pt-4">
            Grand Total: ${grandTotal.toFixed(2)}
          </h6>
          <button className="py-2 px-4  mt-4 bg-pink-600 hover:bg-pink-700 focus:ring-pink-500 focus:ring-offset-pink-200 text-white w-full text-center transition ease-in duration-200  text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 ">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Order;
