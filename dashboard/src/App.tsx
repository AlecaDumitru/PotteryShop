import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/landingPage/Home";
import UserList from "./pages/userPages/UserList";
import User from "./pages/userPages/User";
import NewUser from "./pages/userPages/NewUser";
import ProductList from "./pages/productPages/ProductList";
import Product from "./pages/productPages/Product";
import NewProduct from "./pages/productPages/NewProduct";
import SignIn from "./pages/authentificationPages/SignIn";
import CategoriesList from "./pages/categoryPages/CategoriesList";
import Category from "./pages/categoryPages/Category";
import NewCategory from "./pages/categoryPages/NewCategory";
import Reports from "./pages/reportPages/Reports";



function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <div className="container">
        <Sidebar/>
        <Routes>
            <Route path="/home" element={(<Home/>)}/>
            <Route path="/" element={(<SignIn handleChange={undefined}/>)}/>
            <Route path="/usersManagement" element={(<UserList/>)}/>
            <Route path="/userPage/:userId" element={(<User/>)}/>
            <Route path="/newUser" element={(<NewUser/>)}/>
            <Route path="/products" element={(<ProductList/>)}/>
            <Route path="/reports" element={(<Reports/>)}/>
            <Route path="/product/:productId" element={(<Product/>)}/>
            <Route path="/newProduct" element={(<NewProduct/>)}/>
            <Route path="/categories" element={(<CategoriesList/>)}/>
            <Route path="/category/:categoryId" element={(<Category/>)}/>
            <Route path="/newCategory" element={(<NewCategory/>)}/>

        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
