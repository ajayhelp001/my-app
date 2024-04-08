import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/home/Index.jsx";
import About from "../pages/aboutus/Index.jsx"
import Layout from "../component/layout/Layout.jsx";

const RoutesLink = () =>{
    return(
        <>
        <Router>
            <Routes>
                <Route path='/' element={<Layout Component={<Home/>}/>} />
                <Route path="/about" element={<Layout Component={<About/>}/>} />
            </Routes>
        </Router>
        </>
    )
}
export default RoutesLink;