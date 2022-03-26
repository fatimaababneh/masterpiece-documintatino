import logo from './logo.svg';
import {useState, useRef} from "react"
import './App.css';
import {Routes as Switch,Route} from 'react-router';
import {BrowserRouter} from 'react-router-dom';
import Hero from './Components/Hero/Heroimg';
import Header from './Components/Nav/Navbar (1)';
import Cards from './Components/Cards/Cards';
import Login from './Components/Login/Login';
import Cart from './Components/Cart/Cart';
import SignUp from './Components/SignUp/SignUp';
import Checkout from './Components/Checkout/Checkout';
import Contact from './Components/Contact/Contact';
import UserProfile from './Components/Userprofile/UserProfile';
import SingleProduct from './Components/Singleproduct/SingleProduct';
import {Form} from './Components/forms/form';
import Home from './Pages/Home';
function App() {
 
  return (
    <div >
      <header >
      <BrowserRouter>
      <Header/>
      <Switch>
        <Route path="/" element={<Home/>}/>
        <Route path="/cards" element={<Cards />}/>
        <Route path="/Login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/Signup" element={<SignUp/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/profile" element={<UserProfile/>}/>
        <Route path="/form" element={<Form/>}/>
        <Route path="/single/:id" element={<SingleProduct/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
      </Switch>
      </BrowserRouter>
       
      </header>
    
    </div>
  );
}

export default App;
