import React from 'react';
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { Link } from 'react-router-dom';


const Footer = () => {
  const [user]=useAuthState(auth)
    return (
        <footer className=" pt-8 pb-8 mt-5 bg-black text-white">
<div className='footer justify-around'>
      <div>
    <span className="footer-title">Services</span> 

{user?
  <p>your Email / {user?.email}</p>
 :<Link className='link link-hover' to="/Login">Please Login</Link> 

}
    
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </div> 
  <div>
    <span className="footer-title">Company</span> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </div> 
  <div>
    <span className="footer-title">Legal</span> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </div>
  <div>
    <span className="footer-title">Legal</span>
    <ul>
      <li>  <a className="link link-hover "><FaTwitter></FaTwitter> Twitter</a></li>
      <li>  <a className="link link-hover "><FaTwitter></FaTwitter> Twitter</a></li>
      <li>  <a className="link link-hover "><FaTwitter></FaTwitter> Twitter</a></li>
      <li>  <a className="link link-hover "><FaTwitter></FaTwitter> Twitter</a></li>
      </ul> 


    {/* <a className="link link-hover"><FaFacebook></FaFacebook> facebook</a>
    <a className="link link-hover"><BsInstagram></BsInstagram> Instagram</a>
    <a className="link link-hover"><BsWhatsapp></BsWhatsapp> Whatsapp</a>

  */}

  </div>
</div>
  <footer className="footer footer-center p-4 text-white border-t bg-black  ">
  <div>
    <p>Copyright © 2022 - All right reserved </p>
  </div>
</footer>
  
</footer>
    );
};

export default Footer;