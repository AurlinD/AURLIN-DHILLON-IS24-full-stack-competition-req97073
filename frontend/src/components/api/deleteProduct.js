import axios from "axios";
import getProducts from "./getProducts";

/**
 * DELETE request
 * @param {*} product
 * @param {*} setProducts
 */
const deleteProduct = (product, setProducts) => {
  axios
    .delete(`http://localhost:3000/api/products/${product.productId}`)
    .then(() => {
      // after successful deletion, call GET API to update the list.
      getProducts("", setProducts);
    })
    .catch((err) => {
      console.error(err);
    });
};

export default deleteProduct;
