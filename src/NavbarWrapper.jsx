import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const NavbarWrapper = () => {
    return ( 
        <>
            <Navbar />
            <div className="mx-40 bg-amber-700">
                <Outlet />
            </div>
            
        </>
     );
}
 
export default NavbarWrapper;