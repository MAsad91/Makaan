import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarMenu from "./shared/Nav";
import App from "./App";
import Login from "./login";
import Signup from "./signup";
import ForgetPassword from "./forgetpassword";
import About from "./about";
import Contact from "./contact";
import PropertyAgent from "./property-agent";
import PropertyDetails from "./property-details";
import PropertList from "./property-list";
import PropertyType from "./property-type";
import Testimonial from "./testimonial";
import Page404 from "./404";
import AddProperty from "./component/AddProperty";
import AddPropertyForm from "./component/AddProperty";

function AppRouters() {
  return (
    <Router>
      <NavbarMenu />
      <Routes>
        <Route path="/" exact element={<App />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/forgetpassword" exact element={<ForgetPassword />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/contact" exact element={<Contact />} />
        <Route path="/propertyagent" exact element={<PropertyAgent />} />
        <Route path="/propertydetails" exact element={<PropertyDetails />} />
        <Route path="/propertylist" exact element={<PropertList />} />
        <Route path="/propertytype" exact element={<PropertyType />} />
        <Route path="/testimonial" exact element={<Testimonial />} />
        <Route path="/404" exact element={<Page404 />} />
        <Route path="/addproperty" exact element={<AddProperty />} />
        <Route path="/sellpropertyform" exact element={<AddPropertyForm />} />
      </Routes>
    </Router>
  );
}

export default AppRouters;

// function RouterWrapper() {
//     return (
//         <Router>
//             <AppRouters />
//         </Router>
//     );
// }

// export default RouterWrapper;
