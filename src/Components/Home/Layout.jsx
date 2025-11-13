import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

function MainLayout(){
     return (
        <>
        <Navbar/> {/*this navbar is the shared ui we want across pages */}
        <Outlet/> {/*the actual page which will be rendered along with navbar */}
        </>
     )
}
export default MainLayout;