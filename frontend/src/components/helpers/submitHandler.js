import editData from "../api/editData";
import postData from "../api/postData";

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
