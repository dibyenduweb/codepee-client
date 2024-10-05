import { Outlet } from "react-router-dom";
import SideMenu from "../Sidemenu/SideMenu";


const AdminRoot = () => {
  return (
    <div className="flex">
      {/* SideMenu should be always visible */}
      <SideMenu />
      
      {/* The rest of the page will render based on the nested routes */}
      <div className="flex-grow p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminRoot;
