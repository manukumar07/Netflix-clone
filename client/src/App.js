
import React from "react";
import {  BrowserRouter ,Route, Routes } from "react-router-dom"
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Netflix from "./components/pages/Netflix";
  

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route exact path="/login" element={ <Login />} />
      <Route exact path="/register" element={ <Register />} />
      <Route exact path="/" element={ <Netflix/>} />
    </Routes>
   </BrowserRouter>
  );
}

export default App;
