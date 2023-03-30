import NewProductForm from "../components/NewProductForm";
import { useNavigate } from "react-router-dom";

const NewProduct = () => {
  const navigate = useNavigate();

  return (
    <section>
      <button onClick={() => navigate("/", { replace: true })}>
        Go Back To List View
      </button>
      <h1>Add New Product</h1>
      <NewProductForm />
    </section>
  );
};

export default NewProduct;
