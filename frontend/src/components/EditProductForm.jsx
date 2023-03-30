import { useState, useEffect } from "react";
import editData from "./api/editData";
import { useNavigate } from "react-router-dom";
import getData from "./api/getData";
import Forms from "../components/ui/Forms";

const EditProductForm = () => {
  const [product, setProduct] = useState({
    productId: "",
    productName: "",
    productOwnerName: "",
    developer1: "",
    developer2: "",
    developer3: "",
    developer4: "",
    developer5: "",
    scrumMasterName: "",
    startDate: "",
    methodology: "",
  });
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();

    const developers = [
      product.developer1,
      product.developer2,
      product.developer3,
      product.developer4,
      product.developer5,
    ].filter(Boolean);

    const newProduct = {
      productId: product.productId,
      productName: product.productName,
      productOwnerName: product.productOwnerName,
      developers: developers,
      scrumMasterName: product.scrumMasterName,
      startDate: product.startDate,
      methodology: product.methodology,
    };

    editData(newProduct, navigate);
  };

  useEffect(() => {
    let url = window.location.pathname.split("/"),
      uuid = url[url.length - 1];

    getData(uuid, setProducts);
  }, []);

  useEffect(() => {
    if (products.length === 0) return;
    let developers = products[0].developers,
      temp = { ...products[0] };

    developers.forEach((curr, index) => {
      temp[`developer${index + 1}`] = curr;
    });

    setProduct({ ...temp });
  }, [products]);

  return (
    <div>
      <Forms
        submitHandler={submitHandler}
        product={product}
        setProduct={setProduct}
        buttonText="Edit Product"
      />
    </div>
  );
};

export default EditProductForm;
