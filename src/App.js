import Sidebar from "./components/sidebar";
import Topbar from "./components/topbar";
import "./App.css";
import Home from "./pages/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserList from "./pages/userList";
import User from "./pages/user";
import NewUser from "./pages/newUser";
import ProductList from "./pages/productList";
import Product from "./pages/product";
import NewProduct from "./pages/newProduct";

function App() {
  return (
    <BrowserRouter>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Home />}/>

          <Route path="/users" element={<UserList />}/>
            
          <Route path="/user/:userId" element={<User />}/>
            
          <Route path="/newUser" element={<NewUser />}/>
            
          <Route path="/products" element={<ProductList />}/>
            
          <Route path="/product/:productId" element={<Product />}/>
           
          <Route path="/newproduct" element={<NewProduct />}/>
           
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
