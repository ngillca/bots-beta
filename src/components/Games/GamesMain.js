import React from 'react'
import { motion } from 'framer-motion';

export default function GamesMain() {
  return (
    <motion.div
      initial={{ x: "100vw" }}
      animate={{ x: 0 }}
      transition={{ type: "spring", delay: 0.2 }}
    >
      <h2>Games</h2>
    </motion.div>
  )
}
