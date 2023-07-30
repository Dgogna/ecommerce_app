
import {Routes,Route} from "react-router-dom"
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Policy from "./pages/Policy";
import PageNotFound from "./pages/PageNotFound";
import Register from "./pages/Auth/Register";
import{ Toaster } from 'react-hot-toast';
import Login from "./pages/Auth/Login";
import Dashboard from "./pages/user/Dashboard";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import Users from "./pages/Admin/Users";
import CreateCategory from "./pages/Admin/CreateCategory";
import CreateProduct from "./pages/Admin/CreateProduct";
import Profile from "./pages/user/Profile";
import Orders from "./pages/user/Orders";
import Products from "./pages/Admin/Products";
import UpdateProduct from "./pages/Admin/UpdateProduct";
import ProductDetails from "./pages/ProductDetails"
import Search from "./pages/Search"
import Categories from "./pages/Categories";
import CategoryProduct from "./pages/CategoryProduct";
import CartPage from "./pages/CartPage";
import AdminOrders from "./pages/Admin/AdminOrders";
function App() {
  return (
    <>
    <Toaster />
       <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/categories" element={<Categories />}></Route>
            <Route path="/cart" element={<CartPage />}></Route>
            <Route path="/category/:slug" element={<CategoryProduct />}></Route>
            <Route path="/product/:slug" element={<ProductDetails />}></Route>
            <Route path="/search" element={<Search />}></Route>
            <Route path="/about" element={<About />}></Route>

            <Route path="/dashboard" element={<Dashboard />}></Route>
            <Route path="/dashboard/user/profile" element={<Profile />}></Route>
            <Route path="/dashboard/user/orders" element={<Orders />}></Route>

            <Route path="/admin-dashboard" element={<AdminDashboard />}></Route>
            <Route path="/admin-dashboard/admin/users" element={<Users />}></Route>
            <Route path="/admin-dashboard/admin/orders" element={<AdminOrders />}></Route>
            <Route path="/admin-dashboard/admin/create-product" element={<CreateProduct />}></Route>
            <Route path="/admin-dashboard/admin/product/:slug" element={<UpdateProduct />}></Route>
            <Route path="/admin-dashboard/admin/products" element={<Products />}></Route>
            <Route path="/admin-dashboard/admin/create-category" element={<CreateCategory />}></Route>

            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/policy" element={<Policy />}></Route>
            <Route path="*" element={<PageNotFound />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/login" element={<Login />}></Route>
       </Routes>
        
    </>
  );
}

export default App;
