import axios from "axios";

/**
 * POST request
 * @param {*} newProduct
 * @param {*} navigate
 */
const addProduct = (newProduct, navigate) => {
  axios
    .post("http://localhost:3008/api/products", newProduct)
    .then(() => {
      navigate("/", { replace: true });
    })
    .catch((err) => {
      console.error(err);
    });
};

export default addProduct;
