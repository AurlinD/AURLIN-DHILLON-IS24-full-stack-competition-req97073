import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import getProducts from "../components/api/getProducts";
import ProductList from "../components/ui/ProductList";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [developerInput, setDeveloperInput] = useState("");
  const [scrumMasterInput, setscrumMasterInput] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    getProducts("", setProducts);
  }, []);

  return (
    <div>
      <ProductList
        products={products}
        setProducts={setProducts}
        developerInput={developerInput}
        setDeveloperInput={setDeveloperInput}
        scrumMasterInput={scrumMasterInput}
        setscrumMasterInput={setscrumMasterInput}
        navigate={navigate}
      />
    </div>
  );
};

export default AllProducts;
