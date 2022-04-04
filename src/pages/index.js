import * as React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Hero from "../components/HomePage/Hero"
import Partners from "../components/HomePage/Partners"
import WhatWeDo from "../components/HomePage/WhatWeDo"
import LatestNews from "../components/HomePage/LatestNews"
import FAQ from "../components/HomePage/FAQ"
import JoinCommunity from "../components/HomePage/JoinCommunity"
import SignUp from "../components/HomePage/SignUp"
import "../styles/global.css"

const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        {/*<Hero />*/}
        <Partners />
        <WhatWeDo />
        <LatestNews />
        <FAQ />
        <JoinCommunity />
        <SignUp />
      </main>
      <Footer />
    </>
  )
}

export default HomePage
