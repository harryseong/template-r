import { Outlet } from "react-router-dom";
import Footer from "../common/components/footer/Footer";
import Navbar from "../common/components/navbar/Navbar";

function AppLayout() {

    return (
        <>
            <Navbar />

            <Outlet />

            <Footer />
        </>
    );
}

export default AppLayout;