import React from "react"
import { Helmet } from "react-helmet"
import Header from "../Header"
import Footer from "../Footer"
import favicon from "../../assets/images/favicon/favicon.ico"
import favicon32 from "../../assets/images/favicon/favicon-32x32.png"
import favicon16 from "../../assets/images/favicon/favicon-16x16.png"
import favicon96 from "../../assets/images/favicon/favicon-96x96.png"
import favicon72 from "../../assets/images/favicon/apple-icon-72x72.png"
import favicon60 from "../../assets/images/favicon/apple-icon-60x60.png"

const Layout = ({children}) => (
  <>
    <Helmet>
      <link rel={"apple-touch-icon"} sizes={"60x60"} href={"../../assets/images/favicon/apple-icon-60x60.png"} />
      <link rel={"apple-touch-icon"} sizes={"72x72"} href={favicon72} />
      <link rel={"icon"} type={"image/png"} sizes={"32x32"} href={favicon32}/>
      <link rel={"icon"} type={"image/png"} sizes={"96x96"} href={favicon96}/>
      <link rel={"icon"} type={"image/png"} sizes={"96x96"} href={favicon96}/>
      <link rel={"icon"} type={"image/png"} sizes={"16x16"} href={favicon16}/>
      <link rel={"icon"} href={favicon}/>
      <meta name={"msapplication-TileColor"} content={"#ffffff"} />
      <meta name={"theme-color"} content={"#ffffff"} />
      <title>Keyring</title>
      <meta content={"Keyring"} name="description" />
    </Helmet>
    <Header />
    {children}
    <Footer />
  </>
)

export default Layout
