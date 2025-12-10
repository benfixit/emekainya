import { Outlet } from "react-router";
import Nav from "./Nav";
import Footer from "./Footer";
import styles from "./Layout.module.css";

const Layout = () => {
    return (
        <main className={styles.main}>
            <Nav />
            <Outlet />
            <Footer />
        </main>
    );
}

export default Layout;