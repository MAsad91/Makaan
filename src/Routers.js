import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import NavbarMenu from "./shared/Nav";
import { useState, useEffect, useCallback, useContext } from "react";
import { AuthContext } from "./shared/context/auth-context";

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
import ViewProperty from "./component/subComponents/ViewProperty";
import ViewPropertyType from "./component/ViewPropertyType";
import UserProperties from "./UserProperties";

let logoutTimer;

function AppRouters() {
  const auth = useContext(AuthContext);
  const [token, setToken] = useState(false);
  const [tokenExpirationTime, setTokenExpirationTime] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);

  const login = useCallback((uid, token, expirationDate) => {
    setIsLoggedIn(true);
    setToken(token);
    setUserId(uid);
    const tokenExpirationTime =
      expirationDate || new Date(new Date().getTime() + 1000 * 60 * 60);
    setTokenExpirationTime(tokenExpirationTime);
    localStorage.setItem(
      "userData",
      JSON.stringify({
        userId: uid,
        token: token,
        expiration: tokenExpirationTime.toISOString(),
      })
    );
  }, []);
  const logout = useCallback(() => {
    setIsLoggedIn(false);
    setToken(null);
    setUserId(null);
    setTokenExpirationTime(null);
    localStorage.removeItem("userData");
  }, []);

  useEffect(() => {
    if (token && tokenExpirationTime) {
      const remainingTime =
        tokenExpirationTime.getTime() - new Date().getTime();
      logoutTimer = setTimeout(logout, remainingTime);
    } else {
      clearTimeout(logoutTimer);
    }
  }, [token, tokenExpirationTime, logout]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userData"));
    if (
      storedData &&
      storedData.token &&
      new Date(storedData.expiration) > new Date()
    ) {
      login(
        storedData.userId,
        storedData.token,
        new Date(storedData.expiration)
      );
    }
  }, [login]);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        userId: userId,
        token: token,
        login: login,
        logout: logout,
      }}
    >
      <React.Fragment>
        {/* {isLoggedIn ? ( */}
          <Router>
            <NavbarMenu />
            <Routes>
            {/* <Route path="/login" exact element={<Login />} /> */}
              <Route path="/" exact element={<App />} />
              {/* <Route path="/login" exact element={<Login />} /> */}
              <Route path="/signup" exact element={<Signup />} />
              <Route
                path="/forgetpassword"
                exact
                element={<ForgetPassword />}
              />
              <Route path="/about" exact element={<About />} />
              <Route path="/contact" exact element={<Contact />} />
              <Route path="/propertyagent" exact element={<PropertyAgent />} />
              <Route
                path="/propertydetails"
                exact
                element={<PropertyDetails />}
              />
              <Route path="/propertylist" exact element={<PropertList />} />
              <Route path="/propertytype" exact element={<PropertyType />} />
              <Route path="/testimonial" exact element={<Testimonial />} />
              <Route path="/404" exact element={<Page404 />} />
              <Route path="/addproperty" exact element={<AddProperty />} />
              <Route
                path="/sellpropertyform"
                exact
                element={<AddPropertyForm />}
              />
              <Route
                path="/viewproperty/:id"
                exact
                element={<ViewProperty />}
              />
              <Route
                path="/viewpropertytype/:type"
                exact
                element={<ViewPropertyType />}
              />
              <Route 
                path="/myproperties/:id"
                exact
                element = {<UserProperties />}
              />
            </Routes>
          </Router>
        {/* ) : ( */}
          {/* // <Login />
          <Router>
            <Routes>
              <Route path="/login" exact element={<Login />} />
              <Route path="/signup" exact element={<Signup />} />
              {/* <Route path="/" exact element={<Navigate to="/login" />} />
              <Route path="*" exact element={<Navigate to="/login" />} /> */}
            {/* </Routes> */}
          {/* </Router> */} 
        {/* // )} */}
      </React.Fragment>
    </AuthContext.Provider>
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
