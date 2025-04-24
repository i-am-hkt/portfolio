export const fadeIn = (direction, delay) => {
    return {
      hidden: {
        opacity: 0,
        y: direction === "top" ? -80 : direction === "bottom" ? 80 : 0,
        x: direction === "left" ? -80 : direction === "right" ? 80 : 0,
      },
      show: {
        opacity: 1,
        y: 0,
        x: 0,
        transition: {
          type: "tween",
          delay: delay,
          duration: 0.8,
          ease: "easeOut",
        },
      },
    };
  };
  