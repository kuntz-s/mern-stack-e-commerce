import React, {useEffect} from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {useDispatch} from "react-redux";
import {getBrands, getCategories} from "./redux/dataSlice";
import ConnexionScreen from "./screens/ConnexionScreen";
import InscriptionScreen from "./screens/InscriptionScreen";
import Accueil from "./screens/Accueil";
import Product from "./screens/Product";
import Categories from "./screens/Categories";


const App = () => {

  document.title = "Proshop";
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBrands());
    dispatch(getCategories());
  },[dispatch])

  return (<BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate replace to="/accueil" />} />
      <Route path="/accueil" element = {<Accueil/>}/>
      <Route path="/connexion" element = {<ConnexionScreen/>}/>
      <Route path="/inscription" element = {<InscriptionScreen/>}/>
      <Route path="/product/:productId" element = {<Product/>}/>
      <Route path="/category/:categoryId" element = {<Categories/>}/>
    </Routes>
  </BrowserRouter>);
};
/* <div className=" border-[4px] border-yellow-400 h-96 min-w-full bg-transparent">

        </div>*/
export default App;
