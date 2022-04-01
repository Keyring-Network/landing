import * as React from "react"
import Hero from "../components/HomePage/Hero"
import Partners from "../components/HomePage/Partners"
import WhatWeDo from "../components/HomePage/WhatWeDo"
import "../styles/global.css"

const HomePage = () => {
  return (
    <main>
      <Hero />
      <Partners />
      <WhatWeDo />
    </main>
  )
}

export default HomePage
