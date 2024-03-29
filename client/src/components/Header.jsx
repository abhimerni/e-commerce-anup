import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="headerOne bg-gray-800">
        <div className="logo">
          <span className="custom-logo text-4xl ml-4"><Link to='/'>Abhishek</Link></span>
        </div>
        <div className="hamburger" onClick={() => setOpen(!open)}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <div
          className={
            open ? "second-container-nav show" : "second-container-nav "
          }
        >
          <div className="navBar">
            <div className="navlink" onClick={() => setOpen(false)}><Link to='/login'>Login</Link></div>
            <div className="navlink"><Link to='/register'>Register</Link></div>
            <div className="navlink">news</div>
            <div className="navlink">
              <i className="fa fa-search" aria-hidden="true"></i>
            </div>
          </div>
          <div className="sociallinkContainer">
            <div className="socialLink">
              <i className="fa fa-instagram"></i>
            </div>
            <div className="socialLink">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#fff"
                viewBox="0 0 448 512"
              >
                <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
              </svg>
            </div>
            <div className="socialLink">
              <i className="fa fa-snapchat"></i>
            </div>
            <div className="socialLink">
              <i className="fa fa-facebook"></i>
            </div>
            <div className="socialLink">
              <i className="fa fa-twitter"></i>
            </div>
            <div className="socialLink">
              <i className="fa fa-youtube"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
