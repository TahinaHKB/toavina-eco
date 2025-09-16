import { NavLink } from "react-router-dom";

export function Footer() {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `relative font-lato transition ${
      isActive ? "text-white font-bold" : "text-green-200"
    } hover:text-green-400 after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-green-400 after:transition-all hover:after:w-full ${
      isActive ? "after:w-full" : ""
    }`;

  return (
    <footer className="bg-green-800 text-gray-100 py-12 px-6 md:px-24">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Logo & Nom */}
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-2xl md:text-3xl font-poppins font-bold text-white mb-2">
            Charbon Écologique
          </h1>
          <p className="text-green-200 text-sm md:text-base font-lato">
            Une énergie propre pour un avenir durable 🌱🔥
          </p>
        </div>

        {/* Liens rapides */}
        <div className="flex flex-col md:flex-row gap-6 text-center md:text-left">
          <NavLink to="/" className={linkClass}>
            À propos
          </NavLink>
          <NavLink to="/principle" className={linkClass}>
            Principe
          </NavLink>
          <NavLink to="/avantage" className={linkClass}>
            Avantage
          </NavLink>
        </div>

        {/* Copyright */}
        <div className="text-green-300 text-sm text-center md:text-right font-lato">
          &copy; {new Date().getFullYear()} Charbon Écologique. Tous droits
          réservés.
        </div>
      </div>

      {/* Ligne de séparation */}
      <div className="border-t border-green-700 mt-8"></div>
    </footer>
  );
}
