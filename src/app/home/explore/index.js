import React, { useState, useEffect } from 'react';
import './explore.scss';
//icons
import { BiMenuAltRight, BiShower } from "react-icons/bi";
import { LiaEthereum } from "react-icons/lia";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
//images
import FeatureImg1 from '../../../assets/images/featureCard1.jpeg';
import FeatureImg2 from '../../../assets/images/featureCard2.jpeg';
import FeatureImg3 from '../../../assets/images/featureCard3.jpeg';
import FeatureImg4 from '../../../assets/images/featureCard4.jpeg';
import FeatureImg5 from '../../../assets/images/featureCard5.jpeg';
import FeatureImg6 from '../../../assets/images/featureCard6.jpeg';
import FeatureImg7 from '../../../assets/images/featureCard7.jpeg';
import FeatureImg8 from '../../../assets/images/featureCard8.jpeg';
import FeatureImg9 from '../../../assets/images/featureCard9.jpeg';
import FeatureImg10 from '../../../assets/images/featureCard10.jpeg';
import FeatureUser1 from '../../../assets/images/featureUser1.jpeg';
import FeatureUser2 from '../../../assets/images/featureUser2.png';
import FeatureUser3 from '../../../assets/images/featureUser3.png';
import FeatureUser4 from '../../../assets/images/featureUser4.png';
import FeatureUser5 from '../../../assets/images/featureUser5.png';
import FeatureUser6 from '../../../assets/images/featureUser6.png';
import FeatureUser7 from '../../../assets/images/featureUser7.png';

const FeatureCard = ({ item }) => {
   return (
      <div className='feature-card'>
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
                     {item.userImgs.map((userImg, userIndex) => (
                        <div key={userIndex} className={userIndex === 0 ? 'userImg1' : 'userImg1 userLeft'}>
                           <img src={userImg} alt={`userImage${userIndex}`} loading='lazy' />
                        </div>
                     ))}
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
                        <button>{item.button}</button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default function Explore() {
   const [showFilter, setShowFilter] = useState(false);
   const [showAll, setShowAll] = useState(false);
   const [windowWidth, setWindowWidth] = useState(window.innerWidth);
   const [selectedCategory, setSelectedCategory] = useState(null);
   const [showArtCards, setShowArtCards] = useState(false);
   const [showPhotographyCards, setShowPhotographyCards] = useState(false);
   const [showVWCards, setShowVWCards] = useState(false);
   const [showGameCards, setShowGameCards] = useState(false);


   const toggleFilter = () => {
      setShowFilter(!showFilter);
   };


   useEffect(() => {
      const handleResize = () => {
         setWindowWidth(window.innerWidth);
      };

      window.addEventListener('resize', handleResize);

      return () => {
         window.removeEventListener('resize', handleResize);
      };
   }, []);

   const featuresData = [
      {
         id: 0,
         key: 'art',
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
         key: 'photography',
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
         key: 'visual workds',
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
         key: 'art',
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
         key: 'photography',
         mainImg: FeatureImg5,
         userImgs: [FeatureUser6, FeatureUser7],
         name: 'Iron Man',
         user: '@CosmicArtisan  ,',
         user2: '@Sculptor',
         priceheading: 'Current Bid :',
         eftcurrencies: <LiaEthereum />,
         priceparagraph: '1.3ETH',
         button: 'Place a Bid'
      },
      {
         id: 5,
         key: 'photography',
         mainImg: FeatureImg6,
         userImgs: [FeatureUser1, FeatureUser2],
         name: 'Rosa Vista Realm',
         user: '@Robotica  ,',
         user2: '@MysticInk',
         priceheading: 'Current Bid :',
         eftcurrencies: <LiaEthereum />,
         priceparagraph: '1.86ETH',
         button: 'Place a Bid'
      },
      {
         id: 6,
         key: 'art',
         mainImg: FeatureImg7,
         userImgs: [FeatureUser3, FeatureUser4],
         name: 'Gilded Ebony',
         user: '@EtherFlow  ,',
         user2: '@NanoNebula',
         priceheading: 'Current Bid :',
         eftcurrencies: <LiaEthereum />,
         priceparagraph: '2.05ETH',
         button: 'Place a Bid'
      },
      {
         id: 7,
         key: 'game',
         mainImg: FeatureImg8,
         userImgs: [FeatureUser1],
         name: 'Hazy Hue Wolf',
         user: '@BinaryBard',
         user2: '',
         priceheading: 'Current Bid :',
         eftcurrencies: <LiaEthereum />,
         priceparagraph: '1.87ETH',
         button: 'Place a Bid'
      },
      {
         id: 8,
         key: 'game',
         mainImg: FeatureImg9,
         userImgs: [FeatureUser2, FeatureUser5],
         name: 'Pint-Sized Voyager',
         user: '@LunarArt  ,',
         user2: '@Robotica',
         priceheading: 'Current Bid :',
         eftcurrencies: <LiaEthereum />,
         priceparagraph: '2.32ETH',
         button: 'Place a Bid'
      },
      {
         id: 9,
         key: 'visual workds',
         mainImg: FeatureImg10,
         userImgs: [FeatureUser6, FeatureUser7],
         name: 'Poker',
         user: '@CosmicArtisan  ,',
         user2: '@Sculptor',
         priceheading: 'Current Bid :',
         eftcurrencies: <LiaEthereum />,
         priceparagraph: '1.3ETH',
         button: 'Place a Bid'
      }
   ];

   const determineVisibleData = () => {
      let filteredData = featuresData;
      if (selectedCategory) {
         filteredData = featuresData.filter(item => item.category === selectedCategory);
      }

      if (windowWidth <= 567) {
         return showAll ? featuresData : featuresData.slice(0, 3);
      } else if (windowWidth <= 700) {
         return showAll ? featuresData : featuresData.slice(0, 4);
      } else if (windowWidth <= 920) {
         return showAll ? featuresData : featuresData.slice(0, 6);
      } else if (windowWidth <= 1145) {
         return showAll ? featuresData : featuresData.slice(0, 8);
      } else {
         return showAll ? featuresData : featuresData.slice(0, 10);
      }
   };

   const visibleData = determineVisibleData();


   let renderedCards;
   if (showArtCards) {
      renderedCards = visibleData
         .filter(item => item.key === 'art')
         .map((item, index) => (
            <FeatureCard key={index} item={item} />
         ));
   } else if (showPhotographyCards) {
      renderedCards = visibleData
         .filter(item => item.key === 'photography')
         .map((item, index) => (
            <FeatureCard key={index} item={item} />
         ));
   } else if (showVWCards) {
      renderedCards = visibleData
         .filter(item => item.key === 'visual workds')
         .map((item, index) => (
            <FeatureCard key={index} item={item} />
         ));
   } else if (showGameCards) {
      renderedCards = visibleData
         .filter(item => item.key === 'game')
         .map((item, index) => (
            <FeatureCard key={index} item={item} />
         ));
   } else {
      renderedCards = visibleData.map((item, index) => (
         <FeatureCard key={index} item={item} />
      ));
   }
   return (
      <div className='exploreMain'>
         <div className='container-main-lg'>
            <div className='row'>
               <div className='col-lg-12'>
                  <div className='exploreTitle'>
                     <h2>Explore</h2>
                     <p>Lorem ipsum dolor sit amet consectetur. Iaculis vestibulum purus facilisi ultrices sed faucibus proin cum ut.</p>
                  </div>
               </div>
            </div>
            <div className='marginTop'>
               <div className='row'>
                  <div className='col-lg-6 col-md-6 col-sm-6 col-6'>
                     <div className={`flexGroupButton ${showFilter ? 'show' : ''}`}>
                        <div className='primary-secondHand-btn'>
                           <button onClick={() => setSelectedCategory(null)}>
                              All categories
                           </button>
                        </div>
                        <div className='primary-thirdHand-btn'>
                           <button onClick={() => setShowArtCards(!showArtCards)}>
                              {showArtCards ? 'Art' : ' Art'}
                           </button>
                        </div>
                        <div className='primary-thirdHand-btn'>
                           <button onClick={() => setShowPhotographyCards(!showPhotographyCards)}>
                              {showPhotographyCards ? 'Photography' : ' Photography'}
                           </button>
                        </div>
                        <div className='primary-thirdHand-btn'>
                           <button onClick={() => setShowVWCards(!showVWCards)}>
                              {showVWCards ? 'Visual worlds' : ' Visual worlds'}
                           </button>
                        </div>
                        <div className='primary-thirdHand-btn'>
                           <button onClick={() => setShowGameCards(!showGameCards)}>
                              {showGameCards ? 'Game' : ' Game'}
                           </button>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                     <div className='flexButton'>
                        <div className='primary-secondHand-btn'>
                           <button id="filterButton" onClick={toggleFilter}>
                              Filter
                              <BiMenuAltRight />
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className='grid-data-5 mt-4'>
               {renderedCards}
            </div>
            <div className='row mt-5'>
               <div className='primary-thirdHand-btn'>
                  <button onClick={() => setShowAll(!showAll)}>
                     {showAll ? 'Load Less' : 'Load All'} {showAll ? <IoIosArrowUp /> : <IoIosArrowDown />}
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
}

{/* {visibleData.map((item, index) => (
                  <FeatureCard key={index} item={item} />
               ))}

               {showArtCards && visibleData
                  .filter(item => item.key === 'art')
                  .map((item, index) => (
                     <FeatureCard key={index} item={item} />
                  ))
               }

               {showPhotographyCards && visibleData
                  .filter(item => item.key === 'photography')
                  .map((item, index) => (
                     <FeatureCard key={index} item={item} />
                  ))
               }


               {showVWCards && visibleData
                  .filter(item => item.key === 'virtual words')
                  .map((item, index) => (
                     <FeatureCard key={index} item={item} />
                  ))
               }

               {showGameCards && visibleData
                  .filter(item => item.key === 'game')
                  .map((item, index) => (
                     <FeatureCard key={index} item={item} />
                  ))
               } */}