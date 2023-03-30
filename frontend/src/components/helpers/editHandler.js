const editHandler = (product, navigate) => {
  // navigate to edit-product page with productID in URL
  navigate(`/edit-product/${product.productId}`, { replace: true });
};

export default editHandler;
