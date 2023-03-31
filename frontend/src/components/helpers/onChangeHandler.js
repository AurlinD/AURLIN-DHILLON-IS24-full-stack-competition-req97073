/**
 * update the specific product property on input update
 * @param {*} val
 * @param {*} setProduct
 * @param {*} property
 */
const onChangeHandler = (val, setProduct, property) => {
  setProduct((prev) => ({
    ...prev,
    [property]: val,
  }));
};

export default onChangeHandler;
