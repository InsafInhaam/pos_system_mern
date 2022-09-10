import "./App.css";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Product from "./pages/Product";
import CreateProduct from "./pages/CreateProduct";
import Projects from "./pages/Projects";
import CreateProject from "./pages/CreateProject";
import EditProduct from "./pages/EditProduct";
import ViewProduct from "./pages/ViewProduct";
import Category from "./pages/Category";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/login" element={<Login />} />

          {/* admin */}
          <Route path="/admin" element={<Admin />} />

          {/* products */}
          <Route path="/products" element={<Product />} />
          <Route path="/createproduct" element={<CreateProduct />} />
          <Route path="/editProduct/:id" element={<EditProduct />} />
          <Route path="/viewProduct/:id" element={<ViewProduct />} />

          {/* category */}
          <Route path="/category" element={<Category />} />
          

          {/* projects  */}
          <Route path="/projects" element={<Projects />} />
          <Route path="/createproject" element={<CreateProject />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
