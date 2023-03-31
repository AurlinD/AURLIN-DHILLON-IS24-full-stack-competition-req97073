import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import getProducts from "./api/getProducts";
import Form from "../components/ui/Form";

const EditProductForm = () => {
  const productId = useParams();
  const [inputProduct, setInputProduct] = useState({
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
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const formatProducts = (products) => {
    if (Array.isArray(products) && products.length === 1) {
      const { developers, ...rest } = products[0];
      const [developer1, developer2, developer3, developer4, developer5] =
        developers;

      setInputProduct({
        ...rest,
        developer1: developer1 ?? "",
        developer2: developer2 ?? "",
        developer3: developer3 ?? "",
        developer4: developer4 ?? "",
        developer5: developer5 ?? "",
      });
    }
  };

  const ifError = () => {
    if (error.length !== "") {
      return <div>{error}</div>;
    }
  };

  useEffect(() => {
    let uuid = productId.productId;

    getProducts(uuid, formatProducts);
  }, [productId.productId]);

  return (
    <div>
      <Form
        product={inputProduct}
        setProduct={setInputProduct}
        buttonText="Edit Product"
        setError={setError}
        apiRequest="edit"
        navigate={navigate}
      />
      {ifError()}
    </div>
  );
};

export default EditProductForm;
