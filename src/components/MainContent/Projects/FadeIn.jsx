import React, { forwardRef } from "react";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const FadeIn = forwardRef(({ children, className }, ref) => {
  const { inView, ref: childRef } = useInView({
    threshold: 0.55,
  });
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.div
      ref={childRef}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 1 }}
      className={className}
    >
      {children}
    </motion.div>
  );
});

export default FadeIn;
