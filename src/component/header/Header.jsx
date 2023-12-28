// import React from 'react';
// import { Link } from 'react-router';
import search from '../../assets/images/icon/search.svg';
import add_to_cart from '../../assets/images/icon/add_to_cart.svg';
import wishlist from '../../assets/images/icon/wishlist.svg';
import user from '../../assets/images/icon/user.svg';
import './style.scss';

window.addEventListener('scroll', function() {
  var header = document.querySelector('.header');
  if (window.pageYOffset > 80) {
      header.classList.add('active');
  } else {
      header.classList.remove('active');
  }
});

function Header() {
  return (
    <nav className="navbar navbar-expand-lg header" aria-label="Offcanvas navbar large">
    <div className="container-fluid">
      <a className="navbar-brand" href="javascript:;">Ecommerce</a>
      <div className="d-flex align-items-center gap-sm-3 gap-2">
        <div className="rightside d-lg-none d-flex">
          <ul className="nevigate">
            <li><a href="javascript:;" className="iconsimages" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop"><img src={search} alt="search" /></a></li>
            <li><a href="javascript:;" className="iconsimages" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample"><img src={add_to_cart} alt="add cart" /><span>0</span></a></li>
            <li><a href="javascript:;" className="iconsimages"><img src={wishlist} alt="wishlist" /><span>0</span></a></li>
            <li><a href="javascript:;" className="iconsimages d-sm-flex d-none"><img src={user} alt="user account" /></a></li>
          </ul>
        </div>
        <button className="navbar-toggler burgurMenu shadow-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2" aria-controls="offcanvasNavbar2" aria-label="Toggle navigation">
          <span><img src="assets/images/icon/menu.svg" className="w-100" alt="" /></span>
        </button>
      </div>
      <div className="offcanvas offcanvas-end border-0" tabIndex={-1} id="offcanvasNavbar2" aria-labelledby="offcanvasNavbar2Label">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasNavbar2Label">Ecommerce</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav justify-content-center align-items-lg-center flex-grow-1">
            <li className="nav-item"><a className="nav-link active" aria-current="page" href="javascript:;">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="javascript:;">About Us</a></li>
            <li className="nav-item"><a className="nav-link" href="javascript:;">Products</a></li>
            <li className="nav-item"><a className="nav-link" href="javascript:;">Blog</a></li>
            <li className="nav-item"><a className="nav-link" href="javascript:;">Conntact Us</a></li>
          </ul>
          <div className="rightside d-lg-flex d-none">
            <ul className="nevigate">
              <li><a href="javascript:;" className="iconsimages"><img src={search} alt="search" /></a></li>
              <li><a href="javascript:;" className="iconsimages"><img src={add_to_cart} alt="add cart" /><span>0</span></a></li>
              <li><a href="javascript:;" className="iconsimages"><img src={wishlist} alt="wishlist" /><span>0</span></a></li>
              <li><a href="javascript:;" className="iconsimages"><img src={user} alt="user account" /></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>
  );
}

export default Header;