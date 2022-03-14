import React from 'react'
import { motion } from 'framer-motion';

export default function BlogsMain() {
  return (
    <motion.div
      initial={{ x: "100vw" }}
      animate={{ x: 0 }}
      transition={{ type: "spring", delay: 0.2 }}
    >
      <h2>Blog</h2>
    </motion.div>
  )
}
