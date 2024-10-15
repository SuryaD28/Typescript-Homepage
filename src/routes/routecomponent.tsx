import { BrowserRouter, Route, Routes } from "react-router-dom"
import NavbarComponents from "../components/navbar"
import ProductComponent from "../components/Product"
import About from "../components/About"
import Contact from "../components/contact"
import Home from "../components/Home"

const RoutingComponent = () => {
    return(
        <>
        
         <BrowserRouter>
         <NavbarComponents/>
         <Routes>
         <Route path="" element={<Home/>} /> 
         <Route path="home" element={<Home/>} />
         <Route path="products" element={<ProductComponent/>} />
         <Route path="about" element={<About/>} />
         <Route path="contact" element={<Contact/>} /> 
         </Routes>  
         </BrowserRouter>

        </>
    )
}

export default RoutingComponent