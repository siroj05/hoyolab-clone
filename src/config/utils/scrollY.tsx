import { useEffect, useState } from "react";

const scrollYDetect = () => {
  const [scrollY, setScrollY] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 248) {
        setScrollY(true);
      } else {
        setScrollY(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrollY
}

export default scrollYDetect
