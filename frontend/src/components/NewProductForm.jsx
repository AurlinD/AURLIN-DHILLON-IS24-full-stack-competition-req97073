import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Forms from "../components/ui/Forms";
import submitHandler from "./helpers/submitHandler";

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

  return (
    <div>
      <Forms
        submitHandler={(event) =>
          submitHandler(event, product, "post", navigate)
        }
        product={product}
        setProduct={setProduct}
        buttonText="Add Product"
      />
    </div>
  );
};

export default NewProductForm;
