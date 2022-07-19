import React, { useState } from "react";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
//import Footer from './components/Footer';

const Accueil = () => {
  return (
    <>
      {" "}
      <Header />
      <main className="container mx-auto bg-yellow-400/10 mt-5"></main>
    </>
  );
};

const App = () => {
  return (<BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate replace to="/accueil" />} />
      <Route path="/accueil" element = {<Accueil/>}/>
    </Routes>
  </BrowserRouter>);
};
/* <div className=" border-[4px] border-yellow-400 h-96 min-w-full bg-transparent">

        </div>*/
export default App;
