// import logo from './logo.svg';
// import './App.css';
// import './components/ProductCard/ProductCard.css'
// import './components/ProductList/ProductList.css'
// import './components/Navbar.css'
// import ProductCard from './components/ProductCard/ProductCard';
import Footer from './components/Footer/Footer';
import ProductList from './components/ProductList/ProductList';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Login from './components/Forms/LoginForm/Login'
import  SignUp from'./components/Forms/SignUpForm/SignUp'
import AboutUs from './components/AboutUs/AboutUs'
import UserInfo from './components/UserInfo/UserInfo'
import ContactUs from './components/ContactUs/ContactUs'


function App() {
  return (
    <Router>
    <Navbar/>
    <Routes>
      <Route path="/products" element={<ProductList />} />
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/aboutus" element={<AboutUs/>}/>
      <Route path="/contactus" element={<ContactUs/>}/>
      <Route path="/info" element={<UserInfo/>}/>
    </Routes>
    <Footer/>
  </Router>
  );
}

export default App;
