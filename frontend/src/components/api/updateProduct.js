import axios from "axios";

/**
 * PUT request
 * @param {*} updatedProduct
 * @param {*} navigate
 * @param {*} setError
 * @param {*} productId
 */
const updateProduct = (updatedProduct, navigate, setError, productId) => {
  if (updatedProduct.productId !== productId) {
    setError("productId cannot be changed. Please use original productId");
  }

  axios
    .put(
      `http://localhost:3008/api/products/${updatedProduct.productId}`,
      updatedProduct
    )
    .then(() => {
      // navigate to landing page after success
      setError("");
      navigate("/", { replace: true });
    })
    .catch((err) => {
      console.error(err);
      setError("put request failure. productId already exists in the db.");
    });
};

export default updateProduct;
