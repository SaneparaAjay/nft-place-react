import React from 'react'
import Herobanner from './herobanner'
import Features from './features'
import Creators from './creators'
import Explore from './explore'
import Community from './community'

export default function Home() {
   return (
      <div>
         <Herobanner />
         <Features />
         <Creators />
         <Explore />
         <Community />
      </div>
   )
}
