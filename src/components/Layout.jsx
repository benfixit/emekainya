import { Outlet } from "react-router";
import { Footer, Nav } from "@benfixit/kedu";
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