import { Route,Routes } from "react-router-dom";
import CoinDetailsPage from "../Home/CoinDetaislPage";
import Home from "../Home/Home";
import React from "react";

function Routing(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/details/:coinId" element={<CoinDetailsPage/>}/>
        </Routes>
    )
}
export default Routing;