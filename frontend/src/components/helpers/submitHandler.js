import updateProduct from "../api/updateProduct";
import addProduct from "../api/addProduct";

/**
 * handles edit/post depending on apiRequest string input. creates a new product and
 * makes the appropriate API request to edit/add to db.
 * @param {*} event
 * @param {*} product
 * @param {*} apiRequest
 * @param {*} navigate
 * @param {*} productId
 */
const submitHandler = (event, product, apiRequest, navigate, productId) => {
  event.preventDefault();

  const developers = [
    product.developer1,
    product.developer2,
    product.developer3,
    product.developer4,
    product.developer5,
  ].filter(Boolean);

  const newProduct = {
    productName: product.productName,
    productOwnerName: product.productOwnerName,
    developers: developers,
    scrumMasterName: product.scrumMasterName,
    startDate: product.startDate,
    methodology: product.methodology,
  };

  if (apiRequest === "edit") updateProduct(newProduct, navigate, productId);

  if (apiRequest === "post") addProduct(newProduct, navigate);
};

export default submitHandler;
