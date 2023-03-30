import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AllProducts() {
  const [products, setProducts] = useState([]);
  const [input, setInput] = useState("");
  const [inputScrumMaster, setInputScrumMaster] = useState("");
  const navigate = useNavigate();

  const searchData = () => {
    axios
      .get(`http://localhost:3008/api/${input}`)
      .then((res) => {
        if (Array.isArray(res.data)) {
          setProducts(res.data);
        } else {
          setProducts([res.data]);
        }
      })
      .catch((err) => {
        console.error(err);
        setProducts([]);
      });
  };

  const searchDataScrumMaster = () => {
    axios
      .get(`http://localhost:3008/api/${input}`)
      .then((res) => {
        if (Array.isArray(res.data)) {
          setProducts(res.data);
        } else {
          setProducts([res.data]);
        }
      })
      .catch((err) => {
        console.error(err);
        setProducts([]);
      });
  };

  const isData = () => {
    return products.length === 0;
  };

  const editHandler = (product) => {
    navigate(`/edit-product/${product.productId}`, { replace: true });
    console.log("edit", product);
  };

  const deleteHandler = (product) => {
    axios
      .delete(`http://localhost:3008/api/delete/${product.productId}`)
      .catch((err) => {
        console.error(err);
      });
    console.log("delete", product);
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
      <input
        placeholder="Search Scrum Master..."
        onChange={(event) => setInputScrumMaster(event.target.value)}
      />
      <button type="submit" onClick={() => searchData()}>
        Search
      </button>
      <p>Total results : {products.length}</p>
      {isData() ? (
        <div>No products found</div>
      ) : (
        products.map((product) => {
          return (
            <div key={product.productId}>
              <h2>Product Name: {product.productName}</h2>
              <h2>Product Id: {product.productId}</h2>
              <p>Product Owner Name: {product.productOwnerName}</p>
              <p>Developers: {product.developers}</p>
              <p>Scrum Master Name: {product.scrumMasterName}</p>
              <p>Start Date: {product.startDate}</p>
              <p>Methodology: {product.methodology}</p>
              <button onClick={() => editHandler(product)}>Edit</button>
              <button onClick={() => deleteHandler(product)}>Delete</button>
            </div>
          );
        })
      )}
    </div>
  );
}
