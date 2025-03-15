export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.3 },
};

export const staggerContainer = {
  animate: {
    transition: {
      // Make the transition duration shorter for better performance
      staggerChildren: 0.1,
    },
  },
};
