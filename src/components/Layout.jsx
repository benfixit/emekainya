import { Outlet } from "react-router";
import Footer from "./Footer";
import Nav from "./Nav";
import "./Layout.css";

const Layout = () => {
    return (
        <main>
            <Nav />
            <Outlet />
            <Footer />
        </main>
    );
}

export default Layout;