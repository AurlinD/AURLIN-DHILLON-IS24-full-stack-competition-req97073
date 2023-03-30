import axios from "axios";

const searchDataScrumMaster = (inputScrumMaster, setProducts) => {
  axios
    .get(`http://localhost:3008/api/scrum-master/${inputScrumMaster}`)
    .then((res) => {
      setProducts(res.data);
    })
    .catch((err) => {
      console.error(err);
      setProducts([]);
    });
};

export default searchDataScrumMaster;
