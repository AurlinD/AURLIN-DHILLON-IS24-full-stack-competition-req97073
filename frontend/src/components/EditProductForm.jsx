import { useState, useEffect } from "react";
import NewProductInput from "./ui/NewProductInput";
import editData from "./api/editData";
import { useNavigate } from "react-router-dom";
import getData from "./api/getData";

const EditProductForm = () => {
  const [product, setProduct] = useState({
    productId: "",
    productName: "",
    productOwnerName: "",
    developer1: "",
    developer2: "",
    developer3: "",
    developer4: "",
    developer5: "",
    scrumMasterName: "",
    startDate: "",
    methodology: "",
  });
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const submitHandler = (event) => {
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

    editData(newProduct, navigate);
  };

  useEffect(() => {
    let url = window.location.pathname.split("/"),
      uuid = url[url.length - 1];

    getData(uuid, setProducts);
  }, []);

  useEffect(() => {
    if (products.length === 0) return;
    let developers = products[0].developers,
      temp = { ...products[0] };

    developers.forEach((curr, index) => {
      temp[`developer${index + 1}`] = curr;
    });

    setProduct({ ...temp });
  }, [products]);

  return (
    <div>
      <button onClick={() => navigate("/", { replace: true })}>
        Go Back To List View
      </button>
      <form onSubmit={(event) => submitHandler(event)}>
        <NewProductInput
          isRequired={true}
          label="Product Id"
          setProduct={setProduct}
          property="productId"
          productValue={product.productId}
        />
        <NewProductInput
          isRequired={true}
          label="Product Name"
          setProduct={setProduct}
          property="productName"
          productValue={product.productName}
        />
        <NewProductInput
          isRequired={true}
          label="Product Owner Name"
          setProduct={setProduct}
          property="productOwnerName"
          productValue={product.productOwnerName}
        />
        <NewProductInput
          isRequired={true}
          label="Developer 1"
          setProduct={setProduct}
          property="developer1"
          productValue={product.developer1}
        />
        <NewProductInput
          isRequired={false}
          label="Developer 2 (optional)"
          setProduct={setProduct}
          property="developer2"
          productValue={product.developer2}
        />
        <NewProductInput
          isRequired={false}
          label="Developer 3 (optional)"
          setProduct={setProduct}
          property="developer3"
          productValue={product.developer3}
        />
        <NewProductInput
          isRequired={false}
          label="Developer 4 (optional)"
          setProduct={setProduct}
          property="developer4"
          productValue={product.developer4}
        />
        <NewProductInput
          isRequired={false}
          label="Developer 5 (optional)"
          setProduct={setProduct}
          property="developer5"
          productValue={product.developer5}
        />
        <NewProductInput
          isRequired={true}
          label="Scrum Master Name"
          setProduct={setProduct}
          property="scrumMasterName"
          productValue={product.scrumMasterName}
        />
        <NewProductInput
          isRequired={true}
          label="Start Date"
          setProduct={setProduct}
          property="startDate"
          productValue={product.startDate}
          placeholder="YYYY/MM/DD"
        />
        <NewProductInput
          isRequired={true}
          label="Methodology"
          setProduct={setProduct}
          property="methodology"
          productValue={product.methodology}
          placeholder="Agile/Waterfall"
        />
        <button>Edit Product</button>
      </form>
    </div>
  );
};

export default EditProductForm;
