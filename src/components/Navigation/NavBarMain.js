import React from "react";
import styles from "./NavStyles.module.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function NavBarMain() {
  return (
    <>
      <motion.div initial={{ y: -250 }}   transition={{ delay: 0.5, type: 'spring', stiffness: 120 }} animate={{ y: -10 }} className={styles.header_container}>
        <div className={styles.logo_position}>
          <Link className={styles.header_logo} to="/">
            <h1>Bots Artifact</h1>
          </Link>
        </div>

        <div >
          <Link style={{ padding: '20px', fontSize: '1.5em', color: 'rgb(233, 170, 54)' }} to="/news">
            News
          </Link>
          <Link style={{ padding: '20px', fontSize: '1.5em', color: 'green' }} to="/games">
            Games
          </Link>
          <Link style={{ padding: '20px', fontSize: '1.5em', color: 'rgb(233, 233, 23)'}} to="/blog">
            Blog
          </Link>
        </div>
      </motion.div>
    </>
  );
}
