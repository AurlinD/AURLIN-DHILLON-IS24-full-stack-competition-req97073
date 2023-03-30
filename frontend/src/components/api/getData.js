import axios from "axios";

const getData = (input, setProducts) => {
  axios
    .get(`http://localhost:3008/api/${input}`)
    .then((res) => {
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

export default getData;
