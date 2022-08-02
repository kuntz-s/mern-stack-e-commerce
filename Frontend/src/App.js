import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Accueil from "./screens/Accueil";
import ConnexionScreen from "./screens/ConnexionScreen"

const App = () => {

  document.title = "Proshop"

  return (<BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate replace to="/accueil" />} />
      <Route path="/accueil" element = {<Accueil/>}/>
      <Route path="/connexion" element = {<ConnexionScreen/>}/>
    </Routes>
  </BrowserRouter>);
};
/* <div className=" border-[4px] border-yellow-400 h-96 min-w-full bg-transparent">

        </div>*/
export default App;
