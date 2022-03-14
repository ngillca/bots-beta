import React from "react";
import styles from "./NavStyles.module.css";
import { Link } from "react-router-dom";

export default function NavBarMain() {
  return (
    <>
      <div className={styles.header_container}>
        <div className={styles.logo_position}>
          <Link className={styles.header_logo} to="/">
            <h1>Bots Artifact</h1>
          </Link>
        </div>

        <div >
          <Link style={{ padding: '20px', fontSize: '1.5em', color: 'orange' }} to="/news">
            News
          </Link>
          <Link style={{ padding: '20px', fontSize: '1.5em', color: 'yellow' }} to="/games">
            Games
          </Link>
          <Link style={{ padding: '20px', fontSize: '1.5em', color: 'green'}} to="/blog">
            Blog
          </Link>
        </div>
      </div>
    </>
  );
}
