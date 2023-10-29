import { useState, useEffect } from "react";

export const formatDate = (obj) => {
  const date = new Date(obj);
  const options = { day: "numeric", month: "short", year: "numeric" };
  const formattedDate = date.toLocaleDateString("en-GB", options);
  return formattedDate;
};

export const debounce = (callback, wait) => {
  let timeout;
  return () => {
    clearTimeout(timeout);
    timeout = setTimeout(callback, wait);
  };
};

export const useScrollDetection = (stickyHeaderHeight) => {
  let scrollPos = 0;

  const [direction, setDirection] = useState("up");
  const [touchTop, setTouchTop] = useState(true);

  const scrollDetection = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY !== scrollPos) {
      setDirection(currentScrollY > scrollPos ? "down" : "up");
      setTouchTop(currentScrollY < stickyHeaderHeight);
      scrollPos = currentScrollY;
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollDetection);
    return () => {
      window.removeEventListener("scroll", scrollDetection);
    };
  }, []);

  return { direction, touchTop };
};

export const useWindowResize = () => {
  const [windowSize, setWindowSize] = useState(() => {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  });

  const handleWindowResize = () => {
    setWindowSize(() => {
      const { innerWidth, innerHeight } = window;
      return { innerWidth, innerHeight };
    });
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return { windowSize };
};

export const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
};
