import NewProductForm from "../components/NewProductForm";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function NewProduct() {
  const navigate = useNavigate();

  const addProductHandler = (newProduct) => {
    axios
      .post("http://localhost:3008/api/", newProduct)
      .then((res) => {
        navigate("/", { replace: true });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <section>
      <button onClick={() => navigate("/", { replace: true })}>
        Go Back To List View
      </button>
      <h1>Add New Product</h1>
      <NewProductForm onAddProduct={addProductHandler} />
    </section>
  );
}
