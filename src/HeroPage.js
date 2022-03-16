import React from "react";
import { motion } from "framer-motion";
import styles from "./Hero/HeroStyles.module.css";

import logo from './The_Bots_GIF.gif'

export default function HeroPage() {
  return (
    <>
      <motion.div
        className={styles.hero_container}
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", delay: 0.2 }}
      >
        <h2>
          Welcom to Bots Artifact - A place where you can explore and learn about Science {'&'} Technology
        </h2>
        
      </motion.div>

      <motion.div
        className={styles.hero_container}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
      <h1>hero image </h1>
        {/* <img style={{ border: '1px solid white', borderRadius: '120px', width: '34%'}} src={logo} /> */}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className={styles.hero_landing1}
      >
        <div className={styles.item1}>
          <h2>Play games to enhance your problem
          solving </h2></div>
        <div className={styles.item2}><h2>games image</h2></div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className={styles.hero_landing1}
      >
           <div className={styles.item1}><h2>blog image</h2></div>
     
        <div className={styles.item2}>
          <h2>Check out the blog to tickle your brain</h2>
        </div>
      </motion.div>


      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className={styles.hero_landing1}
      >
        <div className={styles.item1}>
          <h2>Shop to designs</h2>
        </div>
        <div className={styles.item2}><h2>shop image</h2></div>
      </motion.div>
    </>
  );
}
