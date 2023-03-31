import axios from "axios";

/**
 * POST request
 * @param {*} newProduct
 * @param {*} navigate
 * @param {*} setError
 */
const addProduct = (newProduct, navigate, setError) => {
  axios
    .post("http://localhost:3000/api/products", newProduct)
    .then(() => {
      setError("");
      navigate("/", { replace: true });
    })
    .catch((err) => {
      console.error(err);
      setError("post request failure. productId already exists in the db.");
    });
};

export default addProduct;
