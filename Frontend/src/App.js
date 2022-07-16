import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
const logo = require("./assets/logo.png")

const App = () => {
  return (
    <>
      <Header/>
      <main>
        <h1>MERN STACK E-COMMERCEs </h1>
        <img src={logo}  alt="logo" style={{backgroundColor:"yellow",color:"red"}}/>
        <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <button className="bg-violet-500 hover:bg-violet-600 active:bg-green-700 focus:outline-none focus:ring focus:ring-violet-300">
      Bouton
    </button>
      </main>
      <Footer/>
    </>
  )
}

export default App