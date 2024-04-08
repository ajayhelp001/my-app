import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import Header from './component/header/Header.jsx';
// import Footer from './component/footer/Footer.jsx'
// import Herosection from './component/herosection/Herosection.jsx'
// import Chooseus from './component/chooseuscard/Choosecard.jsx'
// import Offersection from './component/offersection/Offer.jsx'
// import TrendingProduct from './component/productcard/Productcard.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <Header/>
    <Herosection/>
    <Chooseus/>
    <Offersection/>
    <TrendingProduct/>
    <Footer/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
