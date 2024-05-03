import React from 'react'
import './herobanner.scss'
//images
import StockUp from '../../../assets/icons/stockUp.png'
import ActiveUser1 from '../../../assets/images/activeUser1.png'
import ActiveUser2 from '../../../assets/images/activeUser2.png'
import ActiveUser3 from '../../../assets/images/activeUser3.png'

//iocns
import { GoArrowRight } from "react-icons/go";
import { GrDiamond } from "react-icons/gr";

export default function Herobanner() {
   return (
      <>
         <div className='herobannerBg'>
            <div className="container-main-lg">
               <div className="row">
                  <div className="col-lg-8 col-md-8 col-sm-12">
                     <div>
                        <div className="herobannerText">
                           <h1>Explore Unique Digital Art And Collectibles</h1>
                           <p>Lorem ipsum dolor sit amet consectetur. Iaculis vestibulum purus facilisi ultrices sed faucibus proin cum ut. Eu dictum nisi facilisis non habitant senectus eget sollicitudin.</p>
                        </div>
                        <div className='btnGroup'>
                           <div className='btnPositionLeft'>
                              <div className='primary-btn'>
                                 <button>
                                    Discover now
                                 </button>
                              </div>
                              <div className="arrowIcon">
                                 <GoArrowRight />
                              </div>
                           </div>
                           <div className="btnPositionRight">
                              <div className="transparent-btn">
                                 <button>
                                    Create your own
                                 </button>
                              </div>
                              <div className='diamondIcon'>
                                 <GrDiamond />
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className='col-lg-4 col-md-4 col-sm-12'>
                     <div className='positionSettelment'>
                        <div className='boxOfSaller'>
                           <div className='stockImg'>
                              <img src={StockUp} alt="stockUp" loading='lazy' />
                           </div>
                           <div className='stockHeadingWord'>
                              <h4>160K</h4>
                              <p>Total sales</p>
                           </div>
                        </div>
                        <div className='activeUser'>
                           <div className='activeUserProfile'>
                              <div className='profilePicPosition'>
                                 <div className='profilePic'>
                                    <img src={ActiveUser1} alt="monkeyProfile" loading='lazy' />
                                 </div>
                              </div>
                              <div className='profilePicPosition2'>
                                 <div className='profilePic'>
                                    <img src={ActiveUser2} alt="monkeyProfile" loading='lazy' />
                                 </div>
                              </div>
                              <div className='profilePicPosition3'>
                                 <div className='profilePic'>
                                    <img src={ActiveUser3} alt="monkeyProfile" loading='lazy' />
                                 </div>
                              </div>
                           </div>
                           <div className='activeUserText'>
                              <h4>12K</h4>
                              <p>Active users</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}
