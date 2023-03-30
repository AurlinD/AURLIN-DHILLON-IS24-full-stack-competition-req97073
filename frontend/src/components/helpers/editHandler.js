const editHandler = (product, navigate) => {
  navigate(`/edit-product/${product.productId}`, { replace: true });
  console.log("edit", product);
};

export default editHandler;
