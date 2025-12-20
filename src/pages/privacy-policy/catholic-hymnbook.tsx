import styles from "./hymnbook.module.css";

const CatholicHymnbook = () => {
    return (
        <section className={styles.wrapper}>
            <h2>Privacy Policy version 1.0 for the Catholic Hymnbook app</h2>
            <div>
                The Catholic Hymnbook does not collect any user data of any kind. The app does not access the internet at all.
                It is just a collection of hymns sung in catholic churches. 
                If you wish to verify this for yourself, see the source code <a href="https://github.com/benfixit/catholic_hymnbook">here.</a>
            </div>
        </section>
    );
}

export default CatholicHymnbook;