import axios from "axios";

const addProductHandler = (newProduct, navigate) => {
  axios
    .post("http://localhost:3008/api/", newProduct)
    .then((res) => {
      navigate("/", { replace: true });
    })
    .catch((err) => {
      console.error(err);
    });
};

export default addProductHandler;
