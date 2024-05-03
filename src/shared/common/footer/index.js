import React from 'react'
import './footer.scss';
//icons
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
//images
import CompanyLogo from '../../../assets//logo/Logo.png'
export default function Footer() {

   return (
      <>
         <footer>
            <div className="container-main-lg">
               <div className='footerDataImgLogo'>
                  <div className='companyLogoImg'>
                     <img src={CompanyLogo} alt="logo" loading='lazy' />
                  </div>
                  <div className='socialMedia'>
                     <div className='SMIcon'>
                        <FaInstagram />
                     </div>
                     <div className='SMIcon'>
                        <FaTwitter />
                     </div>
                     <div className='SMIcon'>
                        <FaLinkedinIn />
                     </div>
                     <div className='SMIcon'>
                        <FaYoutube />
                     </div>
                  </div>
               </div>
               <div className='border'></div>
               <div className='footerUnderData'>
                  <div className='discrible'>
                     <p>Lorem ipsum dolor sit amet consectetur. Iaculis vestibulum purus facilisi ultrices sed faucibus proin cum ut.</p>
                  </div>
                  <div className='center'>
                     <div className='discribeData'>
                        <h3>Explore</h3>
                        <p>Home</p>
                        <p>Collection</p>
                        <p>Conect a wallet</p>
                        <p>Ranking</p>
                     </div>
                  </div>
                  <div className='last'>
                     <div className='discribeData'>
                        <h3>Links</h3>
                        <p>Blog</p>
                        <p>Contact</p>
                        <p>FAQ’s</p>
                        <p>About us</p>
                     </div>
                  </div>
               </div>
            </div>
         </footer>
      </>
   )
}
