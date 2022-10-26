import "./App.css";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Product from "./pages/Product";
import CreateProduct from "./pages/CreateProduct";
import Project from "./pages/Project";
import CreateProject from "./pages/CreateProject";
import EditProduct from "./pages/EditProduct";
import ViewProduct from "./pages/ViewProduct";
import Category from "./pages/Category";
import Client from "./pages/Client";
import CreateClient from "./pages/CreateClient";
import ViewClient from "./pages/ViewClient";
import EditClient from "./pages/EditClient";
import CreateAdmin from "./pages/CreateAdmin";
import EditProfile from "./pages/EditProfile";
import RequireAuth from "./helpers/RequireAuth";
import Layout from "./components/Layout";
import Kanban from "./pages/Kanban";
import EditAdmin from "./pages/EditAdmin";
import ViewAdmin from "./pages/ViewAdmin";
import CreatCategory from "./pages/CreatCategory";
import EditCategory from "./pages/EditCategory";
import Registration from "./pages/Registration";
import Order from "./pages/Order";
import ViewOrder from "./pages/ViewOrder";
import CustomOrder from "./pages/CustomOrder";
import Customer from "./pages/Customer";
import CreateCustomer from "./pages/CreateCustomer";
import EditCustomer from "./pages/EditCustomer";
import Settings from "./pages/Settings";
import UserLogin from "./pages/UserLogin";

function App() {
  const ROLES = {
    HR: 1,
    Developer: 2,
    Admin: 3,
    Staff: 4,
    Cahier: 5,
    Project_manger: 6,
    HR_Manager: 7,
  };
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="*" element={<NotFound />} />

            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/userlogin" element={<UserLogin />} />

            {/* admin logged in */}
            {/* <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}> */}
            {/* dashboard */}
            <Route path="/" element={<Dashboard />} />
            {/* common routes  */}
            <Route path="/kanban" element={<Kanban />} />
            {/* edit profile */}
            <Route path="/editProfile" element={<EditProfile />} />
            {/* settings */}
            <Route path="/settings" element={<Settings />} />

            {/* products */}
            <Route path="/products" element={<Product />} />
            <Route path="/createproduct" element={<CreateProduct />} />
            <Route path="/editproduct/:productId" element={<EditProduct />} />
            <Route path="/viewproduct/:productId" element={<ViewProduct />} />
            {/* orders */}
            <Route path="/orders" element={<Order />} />
            <Route path="/vieworders" element={<ViewOrder />} />
            <Route path="/customorders" element={<CustomOrder />} />
            {/* category */}
            <Route path="/category" element={<Category />} />
            <Route path="/createCategory" element={<CreatCategory />} />
            <Route path="/editCategory/:id" element={<EditCategory />} />
            {/* admin */}
            <Route path="/admin" element={<Admin />} />
            <Route path="/createAdmin" element={<CreateAdmin />} />
            <Route path="/editAdmin/:id" element={<EditAdmin />} />
            <Route path="/viewAdmin/:id" element={<ViewAdmin />} />
            {/* clients */}
            <Route path="/clients" element={<Client />} />
            <Route path="/createClient" element={<CreateClient />} />
            <Route path="/editClient/:id" element={<EditClient />} />
            <Route path="/viewClient/:id" element={<ViewClient />} />
            {/* projects */}
            <Route path="/projects" element={<Project />} />
            <Route path="/createProject" element={<CreateProject />} />

            {/* customers */}
            <Route path="/customers" element={<Customer />} />
            <Route path="/createcustomer" element={<CreateCustomer />} />
            <Route path="/editcustomer/:id" element={<EditCustomer />} />
            {/* </Route> */}

            {/* project manger logged in */}
            <Route
              element={<RequireAuth allowedRoles={[ROLES.Project_manger]} />}
            >
              {/* projects  */}
              {/* <Route path="/projects" element={<Project />} />
              <Route path="/createProject" element={<CreateProject />} /> */}
              {/* clients */}
              <Route path="/clients" element={<Client />} />
              <Route path="/createClient" element={<CreateClient />} />
              <Route path="/editClient/:id" element={<EditClient />} />
              <Route path="/viewClient/:id" element={<ViewClient />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
