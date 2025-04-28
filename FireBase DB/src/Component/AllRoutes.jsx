import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Dashboard from "./Dashboard";
import SignIn from "./Signin";
import PrivateRoutes from "./PrivateRoutes";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/dashboard"
          element={
            <PrivateRoutes>
              <Dashboard /> 
            </PrivateRoutes>
          }
        />

        <Route path="/signin" element={<SignIn />}></Route>
      </Routes>
    </>
  );
};

export default AllRoutes;
