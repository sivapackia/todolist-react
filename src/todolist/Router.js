import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import TableData from "./Table/Table";


const Router=()=>{
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/Table" element={<TableData/>}></Route>
        </Routes>
        </BrowserRouter>
    )
}
export default Router