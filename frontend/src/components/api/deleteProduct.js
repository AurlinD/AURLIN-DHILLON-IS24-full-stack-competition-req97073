import axios from "axios";
import getProducts from "./getProducts";

/**
 * DELETE request
 * @param {*} product
 * @param {*} input
 * @param {*} setProducts
 */
const deleteProduct = (product, input, setProducts) => {
  axios
    .delete(`http://localhost:3008/api/delete/${product.productId}`)
    .then(() => {
      // after successful deletion, call GET API to update the list.
      getProducts(input, setProducts);
    })
    .catch((err) => {
      console.error(err);
    });
};

export default deleteProduct;
