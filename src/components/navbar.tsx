import { Link } from "react-router-dom";
import About from "./About";

const NavbarComponents = () => {

    return(
        <>
        <div className="main">
       
         <nav >
            
            <div className="left">
               <a href="home">SURYA</a>
            </div>

            <div className="mid">
                
                <Link to="/home">Home</Link>
               <Link to="/products">Products</Link>
               <Link to="/about">About Us</Link>
               <Link to="/contact">Contact Us</Link>

            </div>

            <div className="right">
               <button>Sign Up</button>
            </div>
       
         </nav>
        
          

        </div>


      
        </>
    )
}

export default NavbarComponents;