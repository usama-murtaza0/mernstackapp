import React from 'react';
import TopMenu from './components/topMenu';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Products from './components/products/products';
import NewProduct from './components/products/newproduct';
import ContactUs from './components/contactus';
import  NotFound  from './components/notfound';
import UpdateProduct from './components/products/updateproduct';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
  <Router>
  <ToastContainer />
  <TopMenu />
    <Switch>
        <Route path = "/login" component = {Login}  />
        <Route path = "/register" component = {Register}  />
        <Route path = "/products/new" component = {NewProduct}  />
        <Route path = "/products/update/:id" component = {UpdateProduct}  />
        <Route path = "/products:page?" component = {Products}  />
        <Route path = "/contact-us" component = {ContactUs} />
        <Route path = "/not-found" component = {NotFound} />
        <Route path = "/" exact component = {LandingPage} />
        <Redirect to = "/not-found" />
    </Switch>
  </Router>
  );
}

export default App;
