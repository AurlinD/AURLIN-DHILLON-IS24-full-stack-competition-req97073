/**
 * update the specific product property on input update
 * @param {*} val
 * @param {*} setProduct
 */
const onChangeHandler = (val, setProduct, property) => {
  setProduct((prev) => ({
    ...prev,
    [property]: val,
  }));
};

export default onChangeHandler;
