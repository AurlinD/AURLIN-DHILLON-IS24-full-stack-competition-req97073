import editData from "../api/editData";
import postData from "../api/postData";

/**
 * handles edit/post depending on apiFunction string input. creates a new product and
 * makes the appropriate API request to edit/add to db.
 * @param {*} event
 * @param {*} product
 * @param {*} apiFunction
 * @param {*} navigate
 */
const submitHandler = (event, product, apiFunction, navigate) => {
  event.preventDefault();

  const developers = [
    product.developer1,
    product.developer2,
    product.developer3,
    product.developer4,
    product.developer5,
  ].filter(Boolean);

  const newProduct = {
    productId: product.productId,
    productName: product.productName,
    productOwnerName: product.productOwnerName,
    developers: developers,
    scrumMasterName: product.scrumMasterName,
    startDate: product.startDate,
    methodology: product.methodology,
  };

  if (apiFunction === "edit") editData(newProduct, navigate);

  if (apiFunction === "post") postData(newProduct, navigate);
};

export default submitHandler;
