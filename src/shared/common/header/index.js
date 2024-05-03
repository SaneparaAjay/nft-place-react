import React, { useState } from 'react';
import CompanyLogo from '../../../assets/logo/Logo.png';
import UserAccountImg from '../../../assets/images/userAccount.png';
import { IoSearchOutline } from "react-icons/io5";
import { LuBell } from "react-icons/lu";
import './header.scss';
import { RiMenu3Line } from "react-icons/ri";
import { IoClose } from "react-icons/io5";

export default function Header() {
   const [showSidePanel, setShowSidePanel] = useState(false);
   const [showCloseIcon, setShowCloseIcon] = useState(false);
   const [showSideNav, setShowSideNav] = useState(false);

   const toggleSidePanel = () => {
      setShowSidePanel(!showSidePanel);
      setShowCloseIcon(!showCloseIcon);
      setShowSideNav(!showSideNav);
   };
   return (
      <>
         <header>
            <div className="leftDirectionNav">
               <div className="logo">
                  <img src={CompanyLogo} alt="logo" loading='lazy' />
               </div>
               <div className="searchBox">
                  <div className="searchIcon">
                     <IoSearchOutline />
                  </div>
                  <div className='formInfo'>
                     <form>
                        <input type="text" placeholder="Search" />
                     </form>
                  </div>
               </div>
            </div>
            <div className="rightDirectionNav">
               <div className={showSideNav ? 'blackMainData show' : 'blackMainData'}>
                  <div className="navBar">
                     <nav>
                        <a href="Home">Home</a>
                        <a href="Brows">Brows</a>
                        <a href="Create">Create</a>
                        <a href="MyNFT's">MyNFT's</a>
                     </nav>
                  </div>
                  <div className='bellIcon'>
                     <LuBell />
                  </div>
                  <div className='border-data'></div>
                  <div className='userAccountDetails'>
                     <div className='userAccountText'>
                        <h4>Account</h4>
                     </div>
                     <div className='userAccountImgAbsolute'>
                        <div className='userAccountImg'>
                           <img src={UserAccountImg} alt="accountImage" loading='lazy' />
                        </div>
                     </div>
                  </div>
               </div>
               <div className="hamburger" onClick={toggleSidePanel}>
                  <div className="hamburgerIcon">
                     {showCloseIcon ? <IoClose /> : <RiMenu3Line />}
                  </div>
               </div>
            </div>
         </header>
      </>
   );
}
