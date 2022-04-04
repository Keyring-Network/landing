import * as React from "react"
import Hero from "../components/HomePage/Hero"
import Partners from "../components/HomePage/Partners"
import WhatWeDo from "../components/HomePage/WhatWeDo"
import LatestNews from "../components/HomePage/LatestNews"
import FAQ from "../components/HomePage/FAQ"
import JoinCommunity from "../components/HomePage/JoinCommunity"
import "../styles/global.css"

const HomePage = () => {
  return (
    <main>
      <Hero />
      <Partners />
      <WhatWeDo />
      <LatestNews />
      <FAQ />
      <JoinCommunity />
    </main>
  )
}

export default HomePage
