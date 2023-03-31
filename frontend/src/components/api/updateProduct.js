import axios from "axios";

/**
 * PUT request
 * @param {*} updatedProduct
 * @param {*} navigate
 * @param {*} productId
 */
const updateProduct = (updatedProduct, navigate, productId) => {
  updatedProduct.productId = productId;

  axios
    .put(
      `http://localhost:3000/api/products/${updatedProduct.productId}`,
      updatedProduct
    )
    .then(() => {
      // navigate to landing page after success
      navigate("/", { replace: true });
    })
    .catch((err) => {
      console.error(err);
    });
};

export default updateProduct;
