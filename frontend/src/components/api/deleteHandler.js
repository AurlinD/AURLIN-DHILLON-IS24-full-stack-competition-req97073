import axios from "axios";
import searchData from "./searchData";

const deleteHandler = (product, input, setProducts) => {
  axios
    .delete(`http://localhost:3008/api/delete/${product.productId}`)
    .then(() => {
      searchData(input, setProducts);
    })
    .catch((err) => {
      console.error(err);
    });
};

export default deleteHandler;
