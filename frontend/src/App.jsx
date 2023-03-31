import { Route, Routes, BrowserRouter } from "react-router-dom";
import AllProducts from "./pages/AllProducts";
import NewProduct from "./pages/NewProduct";
import EditProduct from "./pages/EditProduct";
import "./App.css";

const App = () => {
  return (
    <div>
      <BrowserRouter className="App">
        <Routes>
          <Route exact path="/" element={<AllProducts />} />
          <Route exact path="/new-product" element={<NewProduct />} />
          <Route path="/edit-product/:productId" element={<EditProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
