import NewProductForm from "../components/NewProductForm";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function NewProduct() {
  const navigate = useNavigate();

  const addProductHandler = (productData) => {
    axios
      .post("http://localhost:3008/api/", productData)
      .then((res) => {
        navigate("/", { replace: true });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <section>
      <h1>Edit Product</h1>
      <NewProductForm onAddProduct={addProductHandler} />
    </section>
  );
}
