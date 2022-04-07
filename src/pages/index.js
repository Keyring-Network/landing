import * as React from "react"
import Layout from "../components/Layout"
import Homepage from "../scenes/Homepage"
import "../styles/global.css"

const HomePage = () => {
  return (
    <Layout>
      <main>
        <Homepage />
      </main>
    </Layout>
  )
}

export default HomePage
