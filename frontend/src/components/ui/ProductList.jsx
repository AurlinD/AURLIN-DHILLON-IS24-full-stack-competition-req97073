import getProducts from "../api/getProducts";
import List from "./List";
import isProducts from "../helpers/isProducts";

const ProductList = ({
  products,
  setProducts,
  developerInput,
  setDeveloperInput,
  scrumMasterInput,
  setscrumMasterInput,
  navigate,
}) => {
  const productList = isProducts(products) ? (
    <div>No products found</div>
  ) : (
    <List products={products} setProducts={setProducts} navigate={navigate} />
  );

  /**
   * Set the products list to only have products that have
   * the developer name
   */
  const handleDeveloperSubmit = () => {
    let developerProducts = products.filter((product) => {
      return product.developers.some((developer) =>
        developer.toLowerCase().includes(developerInput.toLowerCase())
      );
    });

    setProducts(developerProducts);
  };

  /**
   * Set the products list to only have products that have
   * the scrum master name
   */
  const handleScrumMasterSubmit = () => {
    let scrumMasterProducts = products.filter((product) => {
      return (
        product.scrumMasterName.toLowerCase() === scrumMasterInput.toLowerCase()
      );
    });

    setProducts(scrumMasterProducts);
  };

  return (
    <div>
      <button
        style={{ display: "block" }}
        onClick={() => navigate("/new-product")}
      >
        Add New Product
      </button>
      <button
        style={{ display: "block" }}
        type="submit"
        onClick={() => getProducts("", setProducts)}
      >
        Get Entire Products List
      </button>
      <input
        placeholder="Search Developer..."
        onChange={(event) => setDeveloperInput(event.target.value)}
      />
      <button type="submit" onClick={() => handleDeveloperSubmit()}>
        Search Developer Products
      </button>
      <input
        placeholder="Search Scrum Master..."
        onChange={(event) => setscrumMasterInput(event.target.value)}
      />
      <button type="submit" onClick={() => handleScrumMasterSubmit()}>
        Search Scrum Master Products
      </button>
      <p>Total results : {products.length}</p>
      {productList}
    </div>
  );
};

export default ProductList;
