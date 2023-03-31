import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import getProducts from "./api/getProducts";
import Forms from "../components/ui/Forms";
import submitHandler from "./helpers/submitHandler";

const EditProductForm = () => {
  const productId = useParams();
  const [product, setProduct] = useState({
    productId: productId.productId,
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

  useEffect(() => {
    let uuid = productId.productId;

    getProducts(uuid, setProducts);
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
        submitHandler={(event) =>
          submitHandler(event, product, "edit", navigate)
        }
        product={product}
        setProduct={setProduct}
        buttonText="Edit Product"
      />
    </div>
  );
};

export default EditProductForm;
