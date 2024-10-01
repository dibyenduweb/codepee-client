import { Outlet } from "react-router-dom";
import SideMenu from "../sidemenu/SideMenu";
const AdminRoot = () => {
    return(
        <div>
           
         <Outlet/>
         <SideMenu/>
        </div>
    )}
export default AdminRoot;