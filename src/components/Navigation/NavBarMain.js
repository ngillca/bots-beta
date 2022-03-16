import React from "react";
import styles from "./NavStyles.module.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function NavBarMain() {
  return (
    <>
      <motion.div initial={{ y: -250 }}   transition={{ delay: 0.2, type: 'spring', stiffness: 120 }} animate={{ y: -10 }} className={styles.header_container}>
        <div className={styles.logo_position}>
          <Link className={styles.header_logo} to="/">
            <h1 className={styles.logo_gradient}>Bots Artifact</h1>
          </Link>
        </div>

        <div >
          <Link style={{ padding: '20px', fontSize: '1.5em', color: 'navy' }} to="/blog">
            Blog
          </Link>
          <Link style={{ padding: '20px', fontSize: '1.5em', color: 'green' }} to="/games">
            Games
          </Link>
          <Link style={{ padding: '20px', fontSize: '1.5em', color: 'orange'}} to="/shop">
            Shop
          </Link>
        </div>
      </motion.div>
    </>
  );
}
