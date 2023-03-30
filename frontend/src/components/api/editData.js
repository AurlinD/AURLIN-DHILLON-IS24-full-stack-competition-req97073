import axios from "axios";

// PUT API
const editData = (updatedProduct, navigate) => {
  axios
    .put("http://localhost:3008/api/", updatedProduct)
    .then(() => {
      // navigate to landing page after success
      navigate("/", { replace: true });
    })
    .catch((err) => {
      console.error(err);
    });
};

export default editData;
