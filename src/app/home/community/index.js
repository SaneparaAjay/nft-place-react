import React, { useState } from 'react'
import './community.scss';

//images
import Img from '../../../assets/images/featureUser4.png'
import { toast } from 'react-toastify';
export default function Community() {

   const [showPopup, setShowPopup] = useState('');
   const email_pattern = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

   const handleButtonClick = () => {
      if ((showPopup === "") || (showPopup.length === 0)) {
         toast.error("Please Enter Your Email");
      }
      else if (!email_pattern.test(showPopup)) {
         toast.error("Please Enter a Your Correct Email ");
      }
      else {
         toast.success('Your email has been sent successfully')
         setShowPopup('')
      }
   };

   const handleKeyDown = (event) => {
      if (event.keyCode === 13) {
         handleButtonClick()
      }
   }

   const handleChange = (e) => {
      setShowPopup(e.target.value);
   }

   return (
      <div>
         <div className='container-main-lg'>
            <div className='communityBg'>
               <div className='row justify-content-center align-items-center flex gap-10'>
                  <div className='col-lg-4 col-md-4 col-sm-4 col-12'>
                     <div className='communityImg'>
                        <img src={Img} alt="img" loading='lazy' />
                     </div>
                  </div>
                  <div className='col-lg-8 col-md-8 col-sm-8 col-12'>
                     <div className='communityDisc'>
                        <h2>Join Our Community</h2>
                        <p>Lorem ipsum dolor sit amet consectetur. Iaculis vestibulum purus facilisi ultrices sed faucibus proin cum ut.Lorem ipsum dolor sit amet consectetur. Iaculis vestibulum purus facilisi ultrices sed faucibus proin cum ut.</p>
                        <div className='inputField'>
                           <input type="email" onChange={(e) => handleChange(e)}
                              onKeyDown={(e) => handleKeyDown(e)} value={showPopup} placeholder='Enter Your Email Address' />
                           <div className='primary-btn' >
                              <button onClick={() => handleButtonClick()} >
                                 Get Email
                              </button>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}
