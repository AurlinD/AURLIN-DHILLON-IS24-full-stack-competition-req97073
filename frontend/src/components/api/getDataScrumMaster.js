import axios from "axios";

/**
 * GET request for Scrum Master Name
 * @param {*} inputScrumMaster
 * @param {*} setProducts
 */
const getDataScrumMaster = (inputScrumMaster, setProducts) => {
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

export default getDataScrumMaster;
