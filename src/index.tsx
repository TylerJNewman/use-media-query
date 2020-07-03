import { useState, useEffect } from "react";

interface MediaState {
  isMobile?: boolean;
  isTablet?: boolean;
  isDesktop?: boolean;
}

const MOBILE_BREAKPOINT = 768;
const TABLET_BREAKPOINT = 992;

const getState = () => {
  if (typeof window === "undefined") {
    return { isMobile: null, isTablet: null, isDesktop: null };
  }

  const { innerWidth } = window;
  const isMobile = innerWidth < MOBILE_BREAKPOINT;
  const isTablet = !isMobile && innerWidth < TABLET_BREAKPOINT;
  const isDesktop = !isMobile && !isTablet;

  const mediaState: MediaState = {
    isMobile,
    isTablet,
    isDesktop,
  };

  return mediaState;
};

const useMediaQuery = (): MediaState => {
  const [state, setState] = useState({});
  const onResize = () => setState(getState());

  useEffect(() => {
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return state;
};

export default useMediaQuery;
