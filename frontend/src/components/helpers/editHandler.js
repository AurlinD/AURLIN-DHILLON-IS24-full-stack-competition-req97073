const editHandler = (product, navigate) => {
  navigate(`/edit-product/${product.productId}`, { replace: true });
};

export default editHandler;
