import heroImg from "/hero.jpg";
import introImg from "/intro.jpg";
import defImg from "/def.jpg";
import Menu from "../component/Nav";
import { useEffect, useState } from "react";
import { Footer } from "../component/Footer";
import { useNavigate } from "react-router-dom";

function Home() {
  const [showFirst, setShowFirst] = useState(false);
  const [showSecond, setShowSecond] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const firstSection = document.getElementById("about");
      const secondSection = document.getElementById("project");

      if (firstSection) {
        const top = firstSection.getBoundingClientRect().top;
        if (top < window.innerHeight * 0.8) setShowFirst(true);
      }

      if (secondSection) {
        const top = secondSection.getBoundingClientRect().top;
        if (top < window.innerHeight * 0.8) setShowSecond(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // pour les sections déjà visibles au chargement

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full overflow-hidden font-lato">
      <Menu />
      {/* Hero Section */}
      <section
        className="h-screen bg-cover bg-center md:bg-center sm:bg-right relative flex items-center justify-center"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 md:px-10">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-poppins font-bold text-white mb-6">
            Charbon Écologique
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 max-w-2xl mx-auto mb-8 font-lato">
            Une énergie propre qui change la donne 🔥🌱
          </p>
          <a
            onClick={(e) => {
              e.preventDefault();
              const yOffset = -60; // ajuste selon la hauteur de ta navbar
              const element = document.getElementById("about");
              if (element) {
                const y =
                  element.getBoundingClientRect().top +
                  window.pageYOffset +
                  yOffset;
                window.scrollTo({ top: y, behavior: "smooth" });
              }
            }}
            className="cursor-pointer inline-block bg-green-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg shadow-lg hover:bg-green-700 transition font-raleway font-semibold"
          >
            Découvrir
          </a>
        </div>
      </section>

      {/* Section Méthode de fabrication */}
      <section
        id="about"
        className={`py-16 px-6 md:px-24 bg-gradient-to-b from-green-50 to-green-100 transition-all duration-700 ease-out transform ${
          showFirst ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12">
          {/* Texte */}
          <div className="md:w-2/3">
            <h2 className="text-3xl md:text-4xl font-poppins font-extrabold text-green-800 mb-6 text-center md:text-left drop-shadow-md">
              Découvrir le charbon écologique
            </h2>
            <p className="text-gray-800 text-lg md:text-xl mb-4 leading-relaxed font-lato">
              Il est essentiel d’étudier en profondeur le charbon écologique et
              de comprendre le potentiel de cette solution énergétique
              alternative. Nous mettons en lumière ses caractéristiques, son
              mode de production et ses avantages comparatifs, notamment dans le
              cadre d’une transition vers un transport terrestre durable.
            </p>
          </div>

          {/* Image ou illustration */}
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <img
              src={introImg} // Remplace par ton image
              alt="Méthode de fabrication"
              className="rounded-xl shadow-2xl w-64 md:w-full object-cover transform hover:scale-105 transition duration-500"
            />
          </div>
        </div>
      </section>

      {/* Section Cadre du Projet */}
      <section
        id="project"
        className={`py-16 px-6 md:px-24 bg-gradient-to-b from-green-100 to-green-50 transition-all duration-700 ease-out transform ${
          showSecond ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-6xl mx-auto flex flex-col gap-12">
          {/* Titre principal */}
          <h2 className="text-3xl md:text-4xl font-poppins font-extrabold text-green-800 mb-8 text-center md:text-left drop-shadow-md rounded-lg p-2">
            Cadre du Projet
          </h2>

          {/* Définition */}
          <div className="bg-green-50 rounded-xl shadow-lg p-8 flex flex-col md:flex-row items-center gap-6 hover:shadow-2xl transition">
            <div className="md:w-2/3">
              <h3 className="text-2xl font-montserrat font-bold text-green-700 mb-4">
                Définition
              </h3>
              <p className="text-gray-800 text-lg leading-relaxed font-lato">
                Le charbon écologique, également appelé charbon vert ou
                briquette de biomasse, est un combustible solide obtenu à partir
                de matières organiques d’origine végétale ou agricole via un
                procédé de carbonisation contrôlé, suivi souvent d’un broyage,
                d’un ajout de liant naturel, d’un moulage et d’un séchage.
                Contrairement au charbon minéral issu du sous-sol, il est
                renouvelable, moins polluant et contribue à la préservation des
                ressources fossiles.
              </p>
              <p className="text-gray-800 text-lg leading-relaxed mt-3 font-lato">
                Historiquement, son origine s’inspire des charbons de bois
                traditionnels, améliorés au fil du temps par des techniques
                modernes. La production structurée a véritablement commencé dans
                les années 1990-2000 dans certains pays en développement, dans
                le cadre de programmes de lutte contre la déforestation et la
                pauvreté énergétique.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center md:justify-end">
              <img
                src={defImg}
                alt="Définition charbon écologique"
                className="rounded-xl shadow-xl w-64 md:w-full object-cover transform hover:scale-105 transition duration-500"
              />
            </div>
          </div>

          {/* Rôle */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 rounded-xl shadow-lg p-6 flex flex-col gap-4 hover:shadow-2xl transition">
              <h3 className="text-xl font-montserrat font-bold text-green-700">
                Écologique
              </h3>
              <p className="text-gray-800 text-base leading-relaxed font-lato">
                Réduit la pression sur les forêts en utilisant des déchets
                végétaux au lieu du bois d’arbres vivants.
              </p>
            </div>
            <div className="bg-green-50 rounded-xl shadow-lg p-6 flex flex-col gap-4 hover:shadow-2xl transition">
              <h3 className="text-xl font-montserrat font-bold text-green-700">
                Énergétique
              </h3>
              <p className="text-gray-800 text-base leading-relaxed font-lato">
                Offre une alternative accessible pour la cuisson, le chauffage
                ou la production artisanale, en remplaçant le bois-énergie.
              </p>
            </div>
            <div className="bg-green-50 rounded-xl shadow-lg p-6 flex flex-col gap-4 hover:shadow-2xl transition">
              <h3 className="text-xl font-montserrat font-bold text-green-700">
                Sanitaire
              </h3>
              <p className="text-gray-800 text-base leading-relaxed font-lato">
                Produit moins de fumée et de particules fines, améliorant la
                qualité de l’air intérieur.
              </p>
            </div>
            <div className="bg-green-50 rounded-xl shadow-lg p-6 flex flex-col gap-4 hover:shadow-2xl transition">
              <h3 className="text-xl font-montserrat font-bold text-green-700">
                Économique & Social
              </h3>
              <p className="text-gray-800 text-base leading-relaxed font-lato">
                Favorise la création d’emplois locaux dans la collecte de
                biomasse, la fabrication et la distribution.
              </p>
            </div>
          </div>

          <p className="text-gray-800 text-lg leading-relaxed mt-6 font-lato">
            Avec l’intensification des efforts mondiaux pour les énergies
            renouvelables, le charbon écologique est de plus en plus étudié
            comme source d’énergie alternative, notamment pour la cuisson
            propre, le chauffage rural et même l’alimentation de systèmes
            thermiques pour le transport ou de microcentrales à vapeur.
          </p>
        </div>
      </section>
      {/* Section Transition vers Principe et Conception */}
      <section
        id="transition"
        className="py-16 px-6 md:px-24 bg-gradient-to-r from-green-100 to-green-200 flex flex-col items-center text-center overflow-hidden"
      >
        <h2 className="text-3xl md:text-4xl font-poppins font-extrabold text-green-800 mb-6 drop-shadow-md">
          Vers le Principe et la Conception
        </h2>

        <p className="text-gray-800 text-lg md:text-xl mb-8 leading-relaxed max-w-2xl font-lato">
          Maintenant que nous avons exploré le cadre du projet et la méthode de
          fabrication du charbon écologique, découvrons le principe et la
          conception derrière cette énergie innovante.
        </p>

        <button
          onClick={() => navigate("/principle")}
          className="cursor-pointer inline-block bg-green-600 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-green-700 hover:scale-105 transition transform font-raleway font-semibold"
        >
          Découvrir le Principe
        </button>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
