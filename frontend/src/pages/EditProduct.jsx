import EditProductForm from "../components/EditProductForm";
import { useNavigate } from "react-router-dom";

const EditProduct = () => {
  const navigate = useNavigate();

  return (
    <section>
      <h1>Edit Product</h1>
      <button onClick={() => navigate("/", { replace: true })}>
        Go Back To List View
      </button>
      <EditProductForm />
    </section>
  );
};

export default EditProduct;
