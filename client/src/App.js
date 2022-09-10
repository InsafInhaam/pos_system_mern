import "./App.css";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Product from "./pages/Product";
import CreateProduct from "./pages/CreateProduct";
import Category from "./pages/Category";
import CreatCategory from "./pages/CreatCategory";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
          <Route path="login" element={<Login />} />
          <Route path="admin" element={<Admin />} />
          <Route path="products" element={<Product />} />
          <Route path="createproduct" element={<CreateProduct />} />
          <Route path="category" element={<Category />} />
          <Route path="creatcategory" element={<CreatCategory />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
