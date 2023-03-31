import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "./ui/Form";

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
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const ifError = () => {
    if (error.length !== "") {
      return <div>{error}</div>;
    }
  };

  return (
    <div>
      <Form
        product={product}
        setProduct={setProduct}
        buttonText="Add Product"
        navigate={navigate}
        apiRequest="post"
        setError={setError}
      />
      {ifError()}
    </div>
  );
};

export default NewProductForm;
