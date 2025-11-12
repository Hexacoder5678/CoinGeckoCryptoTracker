import React, { useState } from "react";
import "./App.css";
import { CurrencyContext } from "./Components/context/CurrencyContext";
import Routing from "./Components/Routing/Routing";

function App() {
  const [currency, setCurrency] = useState("usd");

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency }}>
      <div className="min-h-screen text-white bg-black">
        <Routing/>
      </div>
    </CurrencyContext.Provider>
  );
}

export default App;
