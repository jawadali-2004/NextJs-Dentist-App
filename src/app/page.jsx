import Blog from "./Pages/Blog/page"
import Elements from "./Pages/Elements/page"
import Feature from "./Pages/Features/page"
import Footer from "./Pages/Footer/page"
import Home from "./Pages/Home/page"
import Page from "./Pages/Page/page"
import Portfolio from "./Pages/Portfolio/page"


const page = () => {
  return (
    <>
    <Home/>
    <Page/>
    <Portfolio/>
    <Elements/>
    <Feature/>
    <Blog/>
    <Footer/>
    </>
  )
}

export default page
