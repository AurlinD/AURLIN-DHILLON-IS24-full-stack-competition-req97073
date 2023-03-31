import axios from "axios";

/**
 * GET request
 * @param {*} input
 * @param {*} setProducts
 */
const getProducts = (input, setProducts) => {
  axios
    .get(`http://localhost:3008/api/${input}`)
    .then((res) => {
      // check if array or single object, update products state accordingly.
      if (Array.isArray(res.data)) {
        setProducts(res.data);
      } else {
        setProducts([res.data]);
      }
    })
    .catch((err) => {
      console.error(err);
      setProducts([]);
    });
};

export default getProducts;
