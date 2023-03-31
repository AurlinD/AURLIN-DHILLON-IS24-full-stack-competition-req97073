/**
 * navigate to edit-product page with productID in URL
 * @param {*} product
 * @param {*} navigate
 */
const editHandler = (product, navigate) => {
  navigate(`/edit-product/${product.productId}`, { replace: true });
};

export default editHandler;
