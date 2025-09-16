import { useState, type JSX } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";

export default function Menu(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const [principeOpen, setPrincipeOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const yOffset = -60; // ajuste selon la hauteur de ta navbar fixe

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const goToPrincipeSection = (id: string) => {
    if (location.pathname === "/principle") {
      setTimeout(() => scrollToId(id), 50);
    } else {
      navigate("/principle", { state: { scrollTo: id } });
    }
    setIsOpen(false);
    setPrincipeOpen(false);
  };

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `relative px-2 py-1 text-sm font-medium transition-all duration-300 
     ${
       isActive
         ? "text-green-700 font-bold after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-green-700"
         : "text-gray-700 hover:text-green-600 after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-green-700 hover:after:w-full"
     }`;

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md shadow-md z-50">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-4 flex items-center justify-between">
        <h1 className="text-xl md:text-2xl font-poppins font-bold text-green-700 tracking-wide">
          Charbon Écologique
        </h1>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-10 text-gray-700 font-lato">
          <NavLink to="/" className={navLinkClass}>
            Accueil
          </NavLink>

          {/* Principe */}
          <div
            className="relative group"
            onMouseEnter={() => setPrincipeOpen(true)}
            onMouseLeave={() => setPrincipeOpen(false)}
          >
            <NavLink to="/principle" className={navLinkClass}>
              Principe
            </NavLink>

            {/* Dropdown */}
            <ul
              className={`absolute top-10 left-0 w-56 rounded-xl shadow-2xl backdrop-blur-md 
                         bg-white/95 border border-gray-100 transform transition-all duration-300 
                         ${
                           principeOpen
                             ? "opacity-100 scale-100 visible"
                             : "opacity-0 scale-95 invisible"
                         }`}
            >
              {[
                { id: "collecte", label: "1 — Collecte" },
                { id: "carbonisation", label: "2 — Carbonisation" },
                { id: "broyage", label: "3 — Broyage" },
                { id: "liant", label: "4 — Liant" },
                { id: "moulage", label: "5 — Moulage" },
                { id: "sechage", label: "6 — Séchage" },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => goToPrincipeSection(item.id)}
                    className="w-full text-left px-5 py-2.5 text-gray-700 text-sm 
                               hover:bg-gradient-to-r hover:from-green-50 hover:to-green-100 
                               hover:text-green-700 rounded-lg transition-colors duration-300"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <NavLink to="/avantage" className={navLinkClass}>
            Avantages
          </NavLink>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-gray-700 text-2xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md px-6 py-4 space-y-4 shadow-lg font-lato border-t border-gray-100">
          <NavLink
            to="/"
            className={navLinkClass}
            onClick={() => setIsOpen(false)}
          >
            Accueil
          </NavLink>

          <div>
            <button
              onClick={() => setPrincipeOpen(!principeOpen)}
              className="w-full text-left font-semibold flex items-center justify-between"
            >
              Principe et Conception
              <span className="text-lg">{principeOpen ? "▲" : "▼"}</span>
            </button>

            {principeOpen && (
              <ul className="pl-4 mt-2 flex flex-col gap-1">
                {[
                  { id: "collecte", label: "1 - Collecte" },
                  { id: "carbonisation", label: "2 - Carbonisation" },
                  { id: "broyage", label: "3 - Broyage" },
                  { id: "liant", label: "4 - Liant" },
                  { id: "moulage", label: "5 - Moulage" },
                  { id: "sechage", label: "6 - Séchage" },
                ].map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => goToPrincipeSection(item.id)}
                      className="cursor-pointer hover:text-green-800 transition-colors"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <NavLink
            to="/avantage"
            className={navLinkClass}
            onClick={() => setIsOpen(false)}
          >
            Avantages
          </NavLink>
        </div>
      )}
    </nav>
  );
}
