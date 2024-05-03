import React, { useMemo, useState, useEffect } from 'react';
import './creators.scss';

import { BiMenuAltRight } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";

import ProductImg1 from '../../../assets/images/productImg1.jpeg';
import ProductImg2 from '../../../assets/images/featureUser7.png';
import ProductImg3 from '../../../assets/images/featureUser2.png';
import ProductImg4 from '../../../assets/images/featureUser3.png';
import ProductImg5 from '../../../assets/images/featureUser6.png';
import ProductImg6 from '../../../assets/images/featureUser1.jpeg';
import ProductImg7 from '../../../assets/images/productImg2.jpeg';

function CreatorCard({ productImg, productHeading, productDiscription, productDiscribe, productNumber }) {
   return (
      <div className="creatorsCards">
         <div className="marginData">
            <div className='creatorsCardsImg'>
               <img src={productImg} alt='productImg' loading='lazy' />
            </div>
            <div className="creatorsCardsHeading">
               <h3>{productHeading}</h3>
               <p>{productDiscription}</p>
               <span>{productDiscribe}</span>
            </div>
         </div>
         <div className='numberOfCards'>
            <p>{productNumber}</p>
         </div>
      </div>
   );
}

export default function Creators() {
   const [showAll, setShowAll] = useState(false);
   const [windowWidth, setWindowWidth] = useState(window.innerWidth);

   useEffect(() => {
      const handleResize = () => {
         setWindowWidth(window.innerWidth);
      };

      window.addEventListener('resize', handleResize);

      return () => {
         window.removeEventListener('resize', handleResize);
      };
   }, []);

   const ProductData = useMemo(() => [
      {
         productImg: ProductImg1,
         productHeading: 'Sata Sculpture',
         productDiscription: '@Sculptor',
         productDiscribe: '890 items',
         productNumber: '1'
      },
      {
         productImg: ProductImg2,
         productHeading: 'Cosmic Art',
         productDiscription: '@CosmicArtist',
         productDiscribe: '1004 items',
         productNumber: '2'
      },
      {
         productImg: ProductImg3,
         productHeading: 'Josmin nan',
         productDiscription: '@NanoNebula',
         productDiscribe: '990 items',
         productNumber: '3'
      },
      {
         productImg: ProductImg4,
         productHeading: 'Binary Bard',
         productDiscription: '@BinaryBard',
         productDiscribe: '1025 items',
         productNumber: '4'
      },
      {
         productImg: ProductImg5,
         productHeading: 'Pixel Smith',
         productDiscription: '@PixelSmithNFT',
         productDiscribe: '1145 items',
         productNumber: '5'
      },
      {
         productImg: ProductImg6,
         productHeading: 'Art Wavez',
         productDiscription: '@WavezNFT',
         productDiscribe: '840 items',
         productNumber: '6'
      },
      {
         productImg: ProductImg7,
         productHeading: 'Ether Easel',
         productDiscription: '@Ethereasel',
         productDiscribe: '798 items',
         productNumber: '7'
      },
      // Add other data objects here
   ], []);

   let visibleData;
   if (windowWidth <= 576) {
      visibleData = showAll ? ProductData : ProductData.slice(0, 4);
   } else if (windowWidth <= 900) {
      visibleData = showAll ? ProductData : ProductData.slice(0, 3);
   } else if (windowWidth <= 1280) {
      visibleData = showAll ? ProductData : ProductData.slice(0, 5);
   } else {
      visibleData = showAll ? ProductData : ProductData.slice(0, 7);
   }

   return (
      <div className='container-main-lg'>
         <div className="creatorsSection">
            <div className='creatorsSpaceBetween'>
               <div className='creatorHeading'>
                  <h2>Meet Our Talented Creators</h2>
               </div>
               <div className='creatorText'>
                  <p onClick={() => setShowAll(!showAll)}>{showAll ? <IoMdClose /> : <BiMenuAltRight />}</p>
               </div>
            </div>
            <div className='creatorsGrid'>
               {visibleData.map((item, index) => (
                  <CreatorCard key={index} {...item} />
               ))}
            </div>
         </div>
      </div>
   );
}
