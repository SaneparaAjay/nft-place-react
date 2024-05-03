import React from 'react';
import './feature.scss';
import Slider from "react-slick";
import { LiaEthereum } from "react-icons/lia";
import FeatureImg1 from '../../../assets/images/featureCard1.jpeg';
import FeatureImg2 from '../../../assets/images/featureCard2.jpeg';
import FeatureImg3 from '../../../assets/images/featureCard3.jpeg';
import FeatureImg4 from '../../../assets/images/featureCard4.jpeg';
import FeatureImg5 from '../../../assets/images/featureCard5.jpeg';
import FeatureUser1 from '../../../assets/images/featureUser1.jpeg';
import FeatureUser2 from '../../../assets/images/featureUser2.png';
import FeatureUser3 from '../../../assets/images/featureUser3.png';
import FeatureUser4 from '../../../assets/images/featureUser4.png';
import FeatureUser5 from '../../../assets/images/featureUser5.png';
import FeatureUser6 from '../../../assets/images/featureUser6.png';
import FeatureUser7 from '../../../assets/images/featureUser7.png';

export default function Features() {

   var settings = {
      infinite: true,
      speed: 1000,
      autoplay: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
         {
            breakpoint: 1280,
            settings: {
               slidesToShow: 3,
               slidesToScroll: 1,
               infinite: true,
            }
         },
         {
            breakpoint: 700,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 1,
               initialSlide: 2
            }
         },
         {
            breakpoint: 580,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1
            }
         }
      ]
   };

   const featuresData = [
      {
         id: 0,
         mainImg: FeatureImg1,
         userImgs: [FeatureUser1, FeatureUser2],
         name: 'Feline Brushstrokes',
         user: '@Robotica  ,',
         user2: '@MysticInk',
         priceheading: 'Current Bid :',
         eftcurrencies: <LiaEthereum />,
         priceparagraph: '1.86ETH',
         button: 'Place a Bid'
      },
      {
         id: 1,
         mainImg: FeatureImg2,
         userImgs: [FeatureUser3, FeatureUser4],
         name: 'Illuminated Enigma',
         user: '@EtherFlow  ,',
         user2: '@NanoNebula',
         priceheading: 'Current Bid :',
         eftcurrencies: <LiaEthereum />,
         priceparagraph: '2.05ETH',
         button: 'Place a Bid'
      },
      {
         id: 2,
         mainImg: FeatureImg3,
         userImgs: [FeatureUser1],
         name: 'Pint-Sized Voyager',
         user: '@BinaryBard',
         user2: '',
         priceheading: 'Current Bid :',
         eftcurrencies: <LiaEthereum />,
         priceparagraph: '1.87ETH',
         button: 'Place a Bid'
      },
      {
         id: 3,
         mainImg: FeatureImg4,
         userImgs: [FeatureUser2, FeatureUser5],
         name: 'Charmingly Fluffed',
         user: '@LunarArt  ,',
         user2: '@Robotica',
         priceheading: 'Current Bid :',
         eftcurrencies: <LiaEthereum />,
         priceparagraph: '2.32ETH',
         button: 'Place a Bid'
      },
      {
         id: 4,
         mainImg: FeatureImg5,
         userImgs: [FeatureUser6, FeatureUser7],
         name: 'Iron Man',
         user: '@CosmicArtisan  ,',
         user2: '@Sculptor',
         priceheading: 'Current Bid :',
         eftcurrencies: <LiaEthereum />,
         priceparagraph: '1.3ETH',
         button: 'Place a Bid'
      }
   ];

   return (
      <>
         <div className="featureNFT">
            <div className='container-main-lg'>
               <div className='row'>
                  <div className='col-lg-12'>
                     <div className="NFTTitle">
                        <h2>Featured NFTs</h2>
                     </div>
                  </div>
               </div>
            </div>
            <div className="div">
               <div className="mainDiv">
                  <div className="container-main-lg">
                     <div className="">
                        <Slider {...settings}>
                           {
                              featuresData.map((item, index) => {
                                 return (
                                    <div className='feature-card' key={index}>
                                       <div className='cardImg'>
                                          <img src={item.mainImg} alt="featureImg1" loading='lazy' />
                                       </div>
                                       <div className='cardDetails'>
                                          <div className='cardHeadingData'>
                                             <div className='cardArtistName'>
                                                <h3>{item.name}</h3>
                                             </div>
                                             <div className="cardDisc">
                                                <div className='cardUserImg'>
                                                   {
                                                      item.userImgs.map((userImg, userIndex) => (
                                                         <div key={userIndex} className={userIndex === 0 ? 'userImg1' : 'userImg1 userLeft'}>
                                                            <img src={userImg} alt={`userImage${userIndex}`} loading='lazy' />
                                                         </div>
                                                      ))
                                                   }
                                                </div>
                                                <div className='cardUserName'>
                                                   <p>{item.user}</p>
                                                   <p>{item.user2}</p>
                                                </div>
                                             </div>
                                          </div>
                                          <div className='dataFlex'>
                                             <div className='cardLineBorder'></div>
                                             <div className='price'>
                                                <div className='priceHeading'>
                                                   <h4>{item.priceheading}</h4>
                                                </div>
                                                <div className='flexBetween'>
                                                   <div className='priceCurrenntFlex'>
                                                      {item.eftcurrencies}
                                                      <p>{item.priceparagraph}</p>
                                                   </div>
                                                   <div className='primary-secondHand-btn'>
                                                      <button>
                                                         {item.button}
                                                      </button>
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 )
                              })
                           }
                        </Slider>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}

