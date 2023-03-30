import axios from "axios";

const editData = (updatedProduct, navigate) => {
  axios
    .put("http://localhost:3008/api/", updatedProduct)
    .then(() => {
      navigate("/", { replace: true });
    })
    .catch((err) => {
      console.error(err);
    });
};

export default editData;
