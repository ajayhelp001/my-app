import React from "react";
import Header from '../../component/header/Header.jsx';
import Footer from '../../component/footer/Footer.jsx'
import Herosection from '../../component/herosection/Herosection.jsx'
import Chooseus from '../../component/chooseuscard/Choosecard.jsx'
import Offersection from '../../component/offersection/Offer.jsx'
import TrendingProduct from '../../component/productcard/Productcard.jsx'

function Home(){
    return(
        <>
        <Herosection/>
        <Chooseus/>
        <Offersection/>
        <TrendingProduct/>
        </>
    )
}
export default Home;