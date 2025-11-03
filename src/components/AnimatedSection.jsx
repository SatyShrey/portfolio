import { useInView,motion } from "framer-motion";
import { useRef } from "react";

const AnimatedSection = ({ children,className='' }) => {
  const ref = useRef(null);
  const ininview = useInView(ref, { once: true, amount: 0 });
  return (
    <motion.section className={className}
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={ininview ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;