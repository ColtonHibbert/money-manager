import React, { useEffect } from "react";
import "redux";
import "tachyons";
import "../styles/styles.css";
import { connect } from "react-redux";
import SignUp from "./SignUp.js";
import Login from "./Login.js";
import ForgotPassword from "./ForgotPassword.js";
import PasswordReset from "./PasswordReset.js";
import Logout from '../components/Logout.js';
import Loading from "../components/Loading.js";
import Home from "./Home.js";
import {
  setRoute,
  setUser,
  setCSRF,
  resetState,
  setPasswordResetToken,
  setInitialData
} from "../services/actions.js";


const mapStateToProps = (state) => {
  return {
    route: state.route,
    user: state.user,
    passwordReset: state.passwordReset,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setRoute: (value) => dispatch(setRoute(value)),
    setUser: (value) => dispatch(setUser(value)),
    setCSRF: (value) => dispatch(setCSRF(value)),
    resetState: () => dispatch(resetState()),
    setPasswordResetToken: (value) => dispatch(setPasswordResetToken(value)),
    setInitialData: (value) => dispatch(setInitialData(value))
  }
}

function App(props) {
  const { route, setRoute, setCSRF, user, setPasswordResetToken, setInitialData } = props;
  console.log("state changed on app, pass in props)", props)
  
  const loadInitialData = (token) => {
    return fetch(
      "http://localhost:3001/loadinitialdata", 
      {
        method: "GET",
        headers: {
          "Content-Type":"application/json",
          "CSRF-Token":user.csrf
        },
        credentials: "include"
      })
      .then(res => res.json())
      .then(data => {
        if(data.error) {
          if(token === "") {
            setRoute("login");
          }
          if(token !== "") {
            setRoute("passwordreset");
          }
        }
        if(!data.error) {
          setInitialData(data);
          setRoute("home");
        }
      })
  }

  const getCsrf = () => {
    return fetch(
      "http://localhost:3001/csrf", 
      {
        method: "GET",
        credentials: "include"
      })
      .then(data => data.json())
      .then(data => {
        if(!data.error) {
          setCSRF(data.csrf);
        }
        if(data.error) {
          console.log(data.error);
        }
      })
      .catch(err => {
        console.log("Error retrieving CSRF Token.")
        setRoute("login");
      })
  }

  const getParams = () => {
    const searchParams = new URLSearchParams(window.location.search);
    
      const token = searchParams.get('token') || '';
      console.log("searchParams.get(token): ", searchParams.get("token"));

      if(token !== '') {
        setPasswordResetToken(token);
        
      }
      return token;
  }

  useEffect( () => {
    console.log("useEffect, app")
    async function getFirstData() {
      console.log("loadUser")
      await getCsrf();
      const token = getParams();
      await loadInitialData(token);
    }
    getFirstData();
  }, []);

  

  return (
    <div className="App ">
      {
        (route === "login") ? 
        <Login {...props} />
        : ""
      }
      {
        (route === "logout") ?
        <Logout {...props} />
        : ""
      }
      {
        (route === "signup") ? 
        <SignUp  {...props} />
        : ""
      }
      {
        (route === "forgotpassword") ?
        <ForgotPassword {...props} />
        : ""
      }
      { 
        (route === "passwordreset") ?
        <PasswordReset {...props} />
        : ""
      }
      {
        (route === "loading") ? 
        <Loading />
        : ""
      }
      {
        (route === "home") ? 
        <Home {...props} />
        : ""
      }
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps )(App);
