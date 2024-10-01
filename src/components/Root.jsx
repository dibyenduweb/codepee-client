import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import Header from "./Home/Header";
import Footer from "./Section/Footer";

const Root = () => {
    return (
        <div>
            <Header/>
           <Outlet></Outlet>
           <Toaster/>
           <Footer/>
        </div>
    );
};

export default Root;