import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop(): null {
  const location = useLocation() as any;

  useEffect(() => {
    const hasTarget =
      !!(location.state && location.state.scrollTo) ||
      !!(location.hash && location.hash.length > 1);
    if (!hasTarget) {
      window.scrollTo({ top: 0, behavior: "auto" }); // ou "smooth" si tu préfères
    }
    // si hasTarget === true, on ne force pas le scroll vers le top
  }, [location.pathname]);

  return null;
}
