import Navbar from"../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

function MainLayout({handleSearch, hideSearch,isloggedIn}) {
    return (
        <>
        <Navbar handleSearch={handleSearch} hideSearch={hideSearch} isloggedIn={isloggedIn} />
        <Outlet />
        <Footer />
        </>

    );
}
export default MainLayout;
