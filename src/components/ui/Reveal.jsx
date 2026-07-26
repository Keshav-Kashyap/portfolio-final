import React from "react";
import { motion } from "framer-motion";
import { fadeUp } from "../../data/theme";

export default function Reveal({ children, style = {}, delay = 0, className = "" }) {
  return (
    <motion.div
      className={className}
      style={style}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
