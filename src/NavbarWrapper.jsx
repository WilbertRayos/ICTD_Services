import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import ServiceRequest from "./ServiceRequest";
import WebsiteUpload from "./WebsiteUpload"
import About from "./About"

const NavbarWrapper = () => {
    return ( 
        <>
            <Navbar />
            {/* <div className="mx-40 bg-amber-700">
                <Outlet />
            </div> */}
            <ServiceRequest />
            <WebsiteUpload />
            <About />
        </>
     );
}
 
export default NavbarWrapper;