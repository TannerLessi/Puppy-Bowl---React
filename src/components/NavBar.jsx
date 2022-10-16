import { Link } from "react-router-dom";

import styles from "../styles/NavBar.module.css";
// my NavBar function is placing links on my page w/<link> to change my web page to display a form i created with my NewDogForm.jsx
function NavBar() {
  return (
    <nav className={styles.NavBar}>
      <Link className={styles.link} to="/">
        Home
      </Link>
      <Link className={styles.link} to="/newDogForm">
        add New Dog
      </Link>
    </nav>
  );
}

export default NavBar;
