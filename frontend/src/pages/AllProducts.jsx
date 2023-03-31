import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import getData from "../components/api/getData";
import ProductList from "../components/ui/ProductList";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [input, setInput] = useState("");
  const [inputScrumMaster, setInputScrumMaster] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    getData(input, setProducts);
  }, []);

  return (
    <div>
      <ProductList
        products={products}
        setProducts={setProducts}
        input={input}
        setInput={setInput}
        inputScrumMaster={inputScrumMaster}
        setInputScrumMaster={setInputScrumMaster}
        navigate={navigate}
      />
    </div>
  );
};

export default AllProducts;
