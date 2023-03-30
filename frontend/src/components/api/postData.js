import axios from "axios";

// POST API
const postData = (newProduct, navigate) => {
  axios
    .post("http://localhost:3008/api/", newProduct)
    .then(() => {
      navigate("/", { replace: true });
    })
    .catch((err) => {
      console.error(err);
    });
};

export default postData;
