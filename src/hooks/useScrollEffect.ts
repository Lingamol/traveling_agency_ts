import { useEffect } from "react";

const useScrollEffect = (setScrollTop: (scrollY: number) => void) => {
  useEffect(() => {
    const handleScroll = (event: Event) => {
      setScrollTop(window.scrollY);
      console.log("scroll: ", window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setScrollTop]);
};
export default useScrollEffect;
