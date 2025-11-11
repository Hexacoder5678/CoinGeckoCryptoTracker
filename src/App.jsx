import React, { useState } from "react";
import './App.css';
import Home from "./Components/pages/Home";
import { CurrencyContext } from "./Components/context/CurrencyContext";

function App(){
  const [currency,setCurrency]=useState('usd');
  return(
    <>
    <CurrencyContext.Provider value={{currency,setCurrency}}>
      <Home/>
    </CurrencyContext.Provider>
    </>
  );
}
export default App;