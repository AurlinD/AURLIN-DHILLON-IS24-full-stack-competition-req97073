import axios from "axios";

/**
 * PUT request
 * @param {*} updatedProduct
 * @param {*} navigate
 */
const updateProduct = (updatedProduct, navigate) => {
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

export default updateProduct;
