import { Route,Routes } from "react-router-dom";
import CoinDetailsPage from "../Home/CoinDetailsPage";
import Home from "../Home/Home";
import React from "react";
import MainLayout from "../Home/Layout";

function Routing(){
    return(
        <Routes>
            <Route path="/" element={<MainLayout/>}>
                <Route index element={<Home/>}/>
                <Route path="details/:coinId" element={<CoinDetailsPage/>}/>
        </Route>
        </Routes>
    )
}
export default Routing;