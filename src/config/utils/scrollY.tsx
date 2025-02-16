import { useEffect, useState } from "react";

const scrollYDetect = (valueY:number) => {
  const [scrollY, setScrollY] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > valueY) {
        setScrollY(true);
      } else {
        setScrollY(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // console.log(window.scrollY)
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrollY
}

export default scrollYDetect
