import NewProductInput from "./NewProductInput";

const Forms = ({ submitHandler, product, setProduct, buttonText }) => {
  return (
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
      <button>{buttonText}</button>
    </form>
  );
};

export default Forms;
