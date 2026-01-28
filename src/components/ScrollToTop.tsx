import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTop component
 * - scrolls to top on pathname changes
 * - if a hash is present, it lets per-page logic handle scrolling to anchors
 */
export function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    // Only scroll to top when the pathname changes. If there's a hash we skip so
    // per-page hash-handling (like Services) can control anchor placement.
    if (!location.hash) {
      window.scrollTo({ top: 0, left: 0 });
    }
  }, [location.pathname]);

  return null;
}
