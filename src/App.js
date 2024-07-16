import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import Header from './component/header/Header';
import UserRegister from "./user/UserRegister";
import UserLogin from "./user/UserLogin";
import Footer from "./component/footer/Footer";
import Dashbord from "./admin/Dashbord";
import AddBooks from "./admin/AddBooks";
import Books from "./admin/Books";

import Transaction from "./admin/Transaction";

import UserTransaction from "./component/transaction/UserTransaction";
import AboutMe from "./component/AboutMe";

import Home from "./component/Home";

function App() {
  const { loading, isAuthenticated, user } = useSelector((state) => state.user);
  // console.log(user.role);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} exact />

        <Route path="/register" element={<UserRegister />} exact />
        <Route path="/login" element={<UserLogin />} exact />

        <Route path="/user/transaction" element={<UserTransaction />} exact /><Route path="/aboutus" element={<AboutMe />} exact />

        <Route
          path="/admin/dashboard"
          element={
            !loading && isAuthenticated && user && user.role === "admin" ? (
              <Dashbord />
            ) : (
              <Navigate to="/login" />
            )
          } exact
        />
        <Route
          path="/admin/addbook"
          element={
            !loading && isAuthenticated && user && user.role === "admin" ? (
              <AddBooks />
            ) : (
              <Navigate to="/login" />
            )
          } exact
        />
        <Route
          path="/admin/books"
          element={
            !loading && isAuthenticated && user && user.role === "admin" ? (
              <Books />
            ) : (
              <Navigate to="/login" />
            )
          } exact
        />
        <Route
          path="/admin/transaction"
          element={
            !loading && isAuthenticated && user && user.role === "admin" ? (
              <Transaction />
            ) : (
              <Navigate to="/login" />
            )
          } exact
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
