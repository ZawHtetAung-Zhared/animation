import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const stickyHeaderHeight = 0;

const Index = () => {
  const { hash } = useLocation();

  useEffect(() => {
    setTimeout(() => {
      if (hash) {
        let anchor = document.querySelector(hash);
        if (anchor && anchor.getBoundingClientRect().top !== 0) {
          window.scroll({
            top:
              anchor.getBoundingClientRect().top +
              window.scrollY -
              stickyHeaderHeight,
            behavior: "smooth",
          });
        }
      }
    }, 500);
  });
};

export default Index;
