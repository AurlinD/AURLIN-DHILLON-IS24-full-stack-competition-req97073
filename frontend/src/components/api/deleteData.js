import axios from "axios";
import getData from "./getData";

// DELETE API
const deleteData = (product, input, setProducts) => {
  axios
    .delete(`http://localhost:3008/api/delete/${product.productId}`)
    .then(() => {
      // after successfull deletion, call GET API to update the list.
      getData(input, setProducts);
    })
    .catch((err) => {
      console.error(err);
    });
};

export default deleteData;
