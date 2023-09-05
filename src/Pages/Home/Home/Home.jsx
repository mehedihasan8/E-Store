import Banner from "../Banner/Banner";
import Discount from "../Discount/Discount";
import Product from "../Product/Product";

const Home = () => {
  return (
    <div className="px-8">
      <Banner />
      <Discount />
      <Product />
    </div>
  );
};

export default Home;
