import Swal from "sweetalert2";
import useCard from "../../Hooks/useCard";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Order = () => {
  const product = useCard();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const total =
      product.reduce((total, problem) => total + problem.price, 0) || 0;
    setTotal(total);
  }, [product]);

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
      if (result) {
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

        console.log("ID deleted from localStorage:", idToDelete);
      }
    });
  };

  return (
    <div className=" w-[90%] mx-2">
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th className="font-semibold">#</th>
              <th className="font-semibold">Course</th>
              <th className="font-semibold">Course Name</th>
              <th className="font-semibold">Price</th>
              <th className="font-semibold">Remove</th>
              <th className="font-semibold ">Pay</th>
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

                <td>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="btn btn-ghost bg-red-600  text-white"
                  >
                    <FaTrashAlt></FaTrashAlt>
                  </button>
                </td>
                <td>
                  <Link to="/dashboard/payment">
                    <button className="btn btn-warning btn-sm items-center ">
                      PAY
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
            <tr className="mt-10">
              <td></td>
              <td></td>
              <td className="mt-5 text-lg font-bold">
                Total Items: {product?.length}
              </td>
              <td className="text-lg font-bold">Total Price: ${total}</td>
              <td>
                <Link to="/dashboard/payment">
                  <button className="btn btn-warning btn-sm ">PAY NOW</button>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Order;
