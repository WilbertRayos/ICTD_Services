import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import ServiceRequest from "./ServiceRequest";
import WebsiteUpload from "./WebsiteUpload"

const NavbarWrapper = () => {
    return ( 
        <>
            <Navbar />
            {/* <div className="mx-40 bg-amber-700">
                <Outlet />
            </div> */}
            <ServiceRequest />
            <WebsiteUpload />
            
        </>
     );
}
 
export default NavbarWrapper;