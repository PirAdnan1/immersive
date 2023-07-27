export const HERO_VARIANTS = {
    initial: {
      opacity: 0,
      y: "0%",
    },
    animate: {
      opacity: 1,
      y: "-100",
      with: 10,
      transition: {
        duration: 1,
        delay: 0.6,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
}