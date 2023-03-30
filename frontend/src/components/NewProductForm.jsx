import { useState } from "react";
import postData from "./api/postData";
import { useNavigate } from "react-router-dom";
import Forms from "../components/ui/Forms";

const NewProductForm = () => {
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

    postData(newProduct, navigate);
  };

  return (
    <div>
      <Forms
        submitHandler={submitHandler}
        product={product}
        setProduct={setProduct}
        buttonText="Add Product"
      />
    </div>
  );
};

export default NewProductForm;
