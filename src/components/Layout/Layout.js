import React from "react"
import { Helmet } from "react-helmet"
import Header from "../Header"
import Footer from "../Footer"
import SEO from "../seo"

const Layout = ({children}) => (
  <>
    <SEO title="Keyring" description="KYC and AML for DeFi by DeFi" image="https:/keyring.network/logo.svg" />
    <Header />
    {children}
    <Footer />
  </>
)

export default Layout
