import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "./ui/Form";

const NewProductForm = () => {
  const [product, setProduct] = useState({
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

  return (
    <div>
      <Form
        product={product}
        setProduct={setProduct}
        buttonText="On Save"
        navigate={navigate}
        apiRequest="post"
      />
    </div>
  );
};

export default NewProductForm;
