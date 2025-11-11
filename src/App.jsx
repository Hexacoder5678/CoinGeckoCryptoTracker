import React, { useState } from "react";
import "./App.css";
import Home from "./Components/Home/Home";
import { CurrencyContext } from "./Components/context/CurrencyContext";

function App() {
  const [currency, setCurrency] = useState("usd");

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency }}>
      <div className="min-h-screen text-white bg-black">
        <Home />
      </div>
    </CurrencyContext.Provider>
  );
}

export default App;
