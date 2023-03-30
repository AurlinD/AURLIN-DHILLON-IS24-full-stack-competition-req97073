import { Route, Routes, BrowserRouter } from "react-router-dom";
import AllProducts from "./pages/AllProducts";
import NewProduct from "./pages/NewProduct";
import EditProduct from "./pages/EditProduct";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<AllProducts />} />
          <Route exact path="/new-product" element={<NewProduct />} />
          <Route path="/edit-product/:productId" element={<EditProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
