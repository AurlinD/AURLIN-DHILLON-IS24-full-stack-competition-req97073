import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);
  const [input, setInput] = useState("");

  const searchData = () => {
    axios
      .get(`http://localhost:3008/api/${input}`)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const isData = () => {
    return products.length === 0;
  };

  useEffect(() => {
    searchData();
  }, []);

  return (
    <div>
      <input
        placeholder="Search Product..."
        onChange={(event) => setInput(event.target.value)}
      />
      <button type="submit" onClick={() => searchData()}>
        Search
      </button>
      {isData() ? (
        <div>No products found</div>
      ) : Array.isArray(products) ? (
        products.map((product) => {
          return (
            <div key={product.productId}>
              <h2>{product.productName}</h2>
              <h2>{product.productId}</h2>
              <p>{product.productOwnerName}</p>
              <p>{product.developers}</p>
              <p>{product.scrumMasterName}</p>
              <p>{product.startDate}</p>
              <p>{product.methodology}</p>
            </div>
          );
        })
      ) : (
        <div key={products.productId}>
          <h2>{products.productName}</h2>
          <h2>{products.productId}</h2>
          <p>{products.productOwnerName}</p>
          <p>{products.developers}</p>
          <p>{products.scrumMasterName}</p>
          <p>{products.startDate}</p>
          <p>{products.methodology}</p>
        </div>
      )}
    </div>
  );
}

export default App;
