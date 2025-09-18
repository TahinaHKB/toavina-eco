import Menu from "../component/Nav";
import { Footer } from "../component/Footer";
import principeImg from "/princ.jpg";
import conceptImg from "/methode.png";
import collecteImg from "/collecte.jpeg";
import carboIntImg from "/carboInt.jpeg";
import carboExtImg from "/carboExt.jpeg";
import { useEffect, useState, type JSX } from "react";
import { useLocation } from "react-router-dom";

const liantImages = [
  "lian1.jpeg",
  "lian2.jpeg",
  "lian3.jpeg",
  "lian4.jpeg",
  "lian5.jpeg",
  "lian6.jpeg",
];

export default function Principe(): JSX.Element {
  const [currentIndex, setCurrentIndex] = useState(0);

  const location = useLocation() as any;
  const yOffset = -60; // ajuster si nécessaire

  useEffect(() => {
    const target =
      location.state?.scrollTo ||
      (location.hash ? location.hash.replace("#", "") : null);
    if (!target) return;

    let cancelled = false;
    const attemptScroll = () => {
      if (cancelled) return;
      const el = document.getElementById(target);
      if (el) {
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
        // Optional: clear state to avoid re-scroll when navigating back — you can replace history state if desired
      } else {
        // réessayer si l'élément n'existe pas encore (chargement lazy, images, etc.)
        setTimeout(attemptScroll, 60);
      }
    };

    // Lancer après un court délai pour laisser React monter le DOM
    setTimeout(attemptScroll, 50);
    return () => {
      cancelled = true;
    };
  }, [location]);

  // Auto-scroll toutes les 3 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % liantImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="w-full overflow-x-hidden font-lato">
      <Menu />

      {/* Hero Section */}
      <section
        className="h-screen bg-cover bg-center relative flex items-center justify-center"
        style={{ backgroundImage: `url(${principeImg})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 text-center px-4 sm:px-6 md:px-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-poppins font-bold text-white mb-6 drop-shadow-lg">
            Principe et Conception
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto mb-8 font-lato">
            Découvrez comment le charbon écologique est conçu et les principes
            qui le rendent efficace et durable.
          </p>
        </div>
      </section>

      {/* Première section */}
      <section
        id="introduction"
        className="py-16 px-6 md:px-24 bg-gradient-to-b from-green-50 to-green-100"
      >
        <div className="max-w-5xl mx-auto flex flex-col items-center gap-12">
          {/* Paragraphe */}
          <p className="text-gray-800 text-lg md:text-xl leading-relaxed text-center font-lato">
            Pour comprendre le charbon écologique, nous allons mettre en
            évidence le mode de conception, les différents types d’outils
            nécessaires à la fabrication du charbon, ainsi que les méthodes
            utilisées pour optimiser au maximum son efficacité.
          </p>

          {/* Image */}
          <div className="w-full flex justify-center">
            <img
              src={conceptImg} // Remplace par ton image
              alt="Concept charbon écologique"
              className="rounded-xl shadow-2xl w-64 md:w-3/4 object-cover transform hover:scale-105 transition duration-500"
            />
          </div>
        </div>
      </section>

      {/* Section Collecte */}
      <section
        id="collecte"
        className="py-16 px-6 md:px-24 bg-gradient-to-b from-green-100 to-green-50"
      >
        <div className="max-w-6xl mx-auto flex flex-col gap-12">
          {/* Titre principal */}
          <h2 className="text-3xl md:text-4xl font-poppins font-extrabold text-green-800 mb-8 text-center md:text-left drop-shadow-md">
            Collecte
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-8 bg-green-50 rounded-2xl p-6 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-500">
            {/* Image à gauche */}
            <div className="md:w-1/3 flex justify-center md:justify-start">
              <img
                src={collecteImg}
                alt="Collecte du charbon écologique"
                className="rounded-xl shadow-2xl w-3/4 md:w-full max-w-sm object-cover transform hover:scale-105 transition duration-500"
              />
            </div>

            {/* Texte à droite */}
            <div className="md:w-2/3 flex flex-col gap-4">
              <p className="text-gray-800 text-lg md:text-xl leading-relaxed font-lato bg-white p-4 rounded-xl shadow-md">
                La première phase essentielle dans la fabrication consiste à
                rassembler les matières premières d’origine végétale ou
                organique, qui serviront de base à la carbonisation. Ces
                matières sont généralement abondantes, peu coûteuses, voire
                gratuites, et issues de déchets agricoles, forestiers ou urbains
                biodégradables. On privilégie les matières riches en carbone et
                facilement combustibles.
              </p>
            </div>
          </div>

          {/* Sous-sections */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Résidus agricoles */}
            <div className="bg-green-50 rounded-xl shadow-lg p-6 hover:shadow-2xl transition">
              <h3 className="text-xl font-bold text-green-700 mb-2">
                Résidus agricoles
              </h3>
              <ul className="list-disc list-inside text-gray-800 font-lato">
                <li>Rafles de maïs (épis secs après récoltes)</li>
                <li>Tiges et feuilles de mil, riz, manioc, maïs</li>
                <li>Balles de riz</li>
                <li>Coques de noix, d’arachides, de café, de cacao</li>
                <li>Bagasse (résidus fibreux de la canne à sucre)</li>
              </ul>
            </div>

            {/* Résidus forestiers */}
            <div className="bg-green-50 rounded-xl shadow-lg p-6 hover:shadow-2xl transition">
              <h3 className="text-xl font-bold text-green-700 mb-2">
                Résidus forestiers
              </h3>
              <ul className="list-disc list-inside text-gray-800 font-lato">
                <li>Sciure de bois</li>
                <li>Copeaux de bois</li>
                <li>Écorces</li>
                <li>Chute ou poussière de bois provenant de menuiseries</li>
              </ul>
            </div>

            {/* Déchets urbains */}
            <div className="bg-green-50 rounded-xl shadow-lg p-6 hover:shadow-2xl transition">
              <h3 className="text-xl font-bold text-green-700 mb-2">
                Déchets urbains biodégradables
              </h3>
              <ul className="list-disc list-inside text-gray-800 font-lato">
                <li>Feuilles mortes</li>
                <li>Papiers ou cartons non traités</li>
                <li>Déchets verts (herbes, taille d’arbres)</li>
              </ul>
            </div>

            {/* Autres matières */}
            <div className="bg-green-50 rounded-xl shadow-lg p-6 hover:shadow-2xl transition">
              <h3 className="text-xl font-bold text-green-700 mb-2">
                Autres matières
              </h3>
              <ul className="list-disc list-inside text-gray-800 font-lato">
                <li>Pelure de fruits (bananes, ananas, …)</li>
                <li>
                  Fèces d’animaux séchées (dans certaines régions rurales)
                </li>
              </ul>
            </div>
          </div>

          {/* Critères de sélection */}
          <div className="bg-green-50 rounded-xl shadow-lg p-6 hover:shadow-2xl transition mt-6">
            <h3 className="text-xl font-bold text-green-700 mb-2">
              Critères de sélection des matières
            </h3>
            <ul className="list-disc list-inside text-gray-800 font-lato">
              <li>
                Disponibilité locale : pour réduire les coûts et favoriser une
                production décentralisée
              </li>
              <li>
                Séchage rapide : les matières doivent avoir une faible humidité
                ou être faciles à sécher
              </li>
              <li>
                Pouvoir calorifique : elles doivent produire une bonne quantité
                de chaleur après carbonisation
              </li>
              <li>
                Non traitées chimiquement : pour éviter la libération de
                substances toxiques
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section Carbonisation */}
      <section
        id="carbonisation"
        className="py-16 px-6 md:px-24 bg-gradient-to-b from-yellow-50 to-yellow-100"
      >
        <div className="max-w-6xl mx-auto flex flex-col gap-12">
          {/* Titre principal */}
          <h2 className="text-3xl md:text-4xl font-poppins font-extrabold text-yellow-800 mb-8 text-center md:text-left drop-shadow-md">
            Carbonisation
          </h2>

          {/* Paragraphe introductif */}
          <p className="text-gray-800 text-lg md:text-xl leading-relaxed font-lato bg-white p-6 rounded-xl shadow-md">
            La carbonisation est un processus thermochimique par lequel on
            chauffe la matière organique en absence ou faible présence
            d’oxygène, afin de transformer cette matière en charbon riche en
            carbone, tout en éliminant l’eau, les gaz volatils et les composants
            organiques légers. Ce processus ne consiste pas à brûler la matière,
            mais à la décomposer lentement sous l’effet de la chaleur. On parle
            aussi de pyrolyse lente et le produit final est appelé charbon
            carbonisé ou biochar.
          </p>

          {/* Formule chimique */}
          <div className="bg-yellow-100 p-4 md:p-6 rounded-xl shadow-inner border-l-4 border-yellow-500">
            <p className="font-semibold text-yellow-700">
              Formule chimique générale :
            </p>
            <p className="text-gray-800 font-lato">
              Biomasse (C6H10O5)n &gt; Charbon (CxHy) + Gaz volatils (CO2, CO,
              CH4, H2, etc.) + Vapeur d’eau (H2O)
            </p>
            <ul className="list-disc list-inside text-gray-800 mt-2 font-lato">
              <li>
                La biomasse est majoritairement composée de cellulose,
                (C6H10O5)n
              </li>
              <li>
                Lors de la pyrolyse (300°C - 500°C sans oxygène), cette
                structure se décompose thermiquement
              </li>
              <li>
                Elle libère des gaz combustibles (CH4, H2, CO), du CO2, de la
                vapeur d’eau et laisse un résidu solide riche en carbone
              </li>
            </ul>
          </div>

          {/* Types de carbonisation - grille */}
          <h3 className="text-2xl font-bold text-yellow-800 mb-4 drop-shadow-sm">
            Types de carbonisation
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Carbonisation interne */}
            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition duration-500 border-l-4 border-yellow-500 flex flex-col items-center gap-4">
              {/* Image illustrative */}
              <img
                src={carboIntImg} // remplace par ton import d'image
                alt="Carbonisation interne"
                className="w-64 h-64 object-cover rounded-full shadow-md"
              />

              <h4 className="text-xl font-bold text-yellow-700 mb-2 text-center">
                Carbonisation interne
              </h4>

              <p className="text-gray-800 font-lato mb-2 text-center">
                Combustion interne dans un dispositif fermé ; les gaz produits
                entretiennent la chaleur nécessaire.
              </p>

              <ul className="list-disc list-inside text-gray-700 font-lato">
                <li>
                  Fosse à charbon : empilement de matières recouvertes pour
                  limiter l’oxygène
                </li>
                <li>Carbonisation en fût métallique : flux d’air contrôlé</li>
                <li>
                  Four amélioré : double chambre, récupération des gaz, meilleur
                  rendement
                </li>
                <li>
                  Pyrolyse contrôlée : systèmes fermés, automatisation
                  partielle, haut rendement
                </li>
              </ul>
            </div>

            {/* Carbonisation externe */}
            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition duration-500 border-l-4 border-yellow-500 flex flex-col items-center gap-4">
              {/* Image illustrative */}
              <img
                src={carboExtImg} // remplace par ton import d'image
                alt="Carbonisation externe"
                className="w-64 h-64 object-cover rounded-full shadow-md"
              />

              <h4 className="text-xl font-bold text-yellow-700 mb-2 text-center">
                Carbonisation externe
              </h4>

              <p className="text-gray-800 font-lato mb-2 text-center">
                La chaleur est appliquée depuis l’extérieur, la matière se
                carbonise de l’extérieur vers l’intérieur.
              </p>

              <ul className="list-disc list-inside text-gray-700 font-lato">
                <li>Pour certaines matières comme les balles de riz</li>
                <li>
                  Suivi de la couleur des matières pour contrôler la
                  carbonisation
                </li>
                <li>
                  Temps rapide (~1 heure), mais nécessite surveillance constante
                </li>
                <li>Peut nécessiter eau pour stopper la combustion</li>
              </ul>
            </div>
          </div>

          {/* Conditions de carbonisation */}
          <div className="bg-yellow-50 p-6 rounded-2xl shadow-inner border-l-4 border-yellow-500 mt-6">
            <h3 className="text-xl font-bold text-yellow-700 mb-2">
              Conditions nécessaires
            </h3>
            <ul className="list-disc list-inside text-gray-800 font-lato">
              <li>Température : 300°C - 500°C</li>
              <li>
                Durée : 2 à 8 heures selon méthode (1 à 3 heures pour externe)
              </li>
              <li>Humidité des matières : &lt;20%</li>
              <li>Contrôle de l’oxygène : éviter combustion totale</li>
            </ul>
            <p className="mt-2 text-gray-700 font-lato">
              La durée et la qualité de carbonisation dépendent du type de
              matière, de la méthode utilisée, de la quantité et du contrôle de
              la température.
            </p>
          </div>
        </div>
      </section>

      {/* Section Broyage */}
      <section
        id="broyage"
        className="py-16 px-6 md:px-24 bg-gradient-to-b from-yellow-50 to-yellow-100"
      >
        <div className="max-w-6xl mx-auto flex flex-col gap-12">
          {/* Titre principal */}
          <h2 className="text-3xl md:text-4xl font-poppins font-extrabold text-yellow-800 mb-8 text-center md:text-left drop-shadow-md">
            Broyage
          </h2>

          {/* Image + paragraphe introductif */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Image illustrative */}
            {/* <div className="md:w-1/3 flex justify-center md:justify-start">
        <img
          src={broyageImg} // remplace par ton image
          alt="Broyage du charbon écologique"
          className="rounded-xl shadow-2xl w-3/4 md:w-full max-w-sm object-cover transform hover:scale-105 transition duration-500"
        />
      </div> */}

            {/* Texte explicatif */}
            <p className="text-gray-800 text-lg md:text-xl leading-relaxed font-lato md:w-2/3">
              Après la carbonisation, le charbon obtenu est souvent en morceaux
              irréguliers. Pour pouvoir le transformer en briquettes ou
              granulés, il faut d’abord le réduire en poudre homogène, d’où
              l’étape du broyage et du tamisage.
            </p>
          </div>

          {/* Sous-étapes */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Broyage */}
            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition duration-500 border-l-4 border-yellow-500 flex flex-col items-center gap-4">
              {/* <img
          src={broyageMethodImg} // image illustrant le broyage
          alt="Broyage"
          className="w-24 h-24 object-cover rounded-full shadow-md"
        /> */}
              <h4 className="text-xl font-bold text-yellow-700 mb-2 text-center">
                Le broyage
              </h4>
              <p className="text-gray-800 font-lato text-center mb-2">
                L’objectif est de réduire le charbon en particules fines et
                homogènes pour faciliter le moulage et améliorer la cohésion.
              </p>
              <ul className="list-disc list-inside text-gray-700 font-lato">
                <li>Broyage manuel : pilon, mortier ou sac + objet lourd</li>
                <li>Broyage mécanique : broyeur à marteaux, moulin à meules</li>
              </ul>
            </div>

            {/* Tamisage */}
            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition duration-500 border-l-4 border-yellow-500 flex flex-col items-center gap-4">
              {/* <img
          src={tamisageImg} // image illustrant le tamisage
          alt="Tamisage"
          className="w-24 h-24 object-cover rounded-full shadow-md"
        /> */}
              <h4 className="text-xl font-bold text-yellow-700 mb-2 text-center">
                Tamisage
              </h4>
              <p className="text-gray-800 font-lato text-center mb-2">
                Séparer les particules fines utilisables pour le moulage des
                fragments trop gros afin d’améliorer la qualité finale.
              </p>
              <ul className="list-disc list-inside text-gray-700 font-lato">
                <li>Tamis manuel ou passoire métallique</li>
                <li>
                  Particules fines (inférieur à 2mm) utilisées pour les
                  briquettes
                </li>
                <li>Morceaux trop gros recyclés pour être rebroyés</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section Liant */}
      <section
        id="liant"
        className="py-16 px-6 md:px-24 bg-gradient-to-b from-blue-50 to-blue-100"
      >
        <div className="max-w-6xl mx-auto flex flex-col gap-12">
          {/* Titre principal */}
          <h2 className="text-3xl md:text-4xl font-poppins font-extrabold text-blue-800 mb-8 text-center md:text-left drop-shadow-md">
            Ajout de liant
          </h2>

          {/* Paragraphe introductif */}
          <p className="text-gray-800 text-lg md:text-xl leading-relaxed font-lato text-center md:text-left">
            Le liant est une matière organique ou inorganique ajoutée à la
            poudre de charbon après carbonisation et broyage, qui permet de lier
            les particules entre elles par adhésion ou cohésion moléculaire,
            formant ainsi une masse compacte et malléable, apte à être moulée en
            briquettes. Une fois séché, le mélange conserve sa forme et présente
            une bonne résistance mécanique et durabilité thermique lors de la
            combustion.
          </p>

          {/* Cartes types de liants */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Liants naturels */}
            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition duration-500 border-l-4 border-blue-500">
              <h4 className="text-xl font-bold text-blue-700 mb-2 text-center">
                Liants naturels
              </h4>
              <ul className="list-disc list-inside text-gray-700 font-lato">
                <li>Amidon (maïs, manioc, riz, …)</li>
                <li>Argile (rouge, noire)</li>
                <li>Farine de blé ou de manioc</li>
                <li>Mélasse (sous-produit de la canne à sucre)</li>
                <li>Bouse de bœuf</li>
              </ul>
            </div>

            {/* Liants chimiques / industriels */}
            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition duration-500 border-l-4 border-blue-500">
              <h4 className="text-xl font-bold text-blue-700 mb-2 text-center">
                Liants chimiques / industriels
              </h4>
              <ul className="list-disc list-inside text-gray-700 font-lato">
                <li>Ciment</li>
                <li>Colles industrielles</li>
                <li>Résines synthétiques</li>
                <li>Papiers et cartons</li>
              </ul>
            </div>

            {/* Critères de choix */}
            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition duration-500 border-l-4 border-blue-500">
              <h4 className="text-xl font-bold text-blue-700 mb-2 text-center">
                Critères de choix
              </h4>
              <ul className="list-disc list-inside text-gray-700 font-lato">
                <li>Peu coûteux</li>
                <li>Non toxique</li>
                <li>Écologique et renouvelable</li>
                <li>Bonne capacité de liaison</li>
                <li>Résistance thermique</li>
                <li>Faible impact sur le pouvoir calorifique</li>
              </ul>
            </div>
          </div>

          <p className="text-gray-500 text-sm text-center mt-4 font-lato">
            Source : FAO
          </p>
        </div>
        {/* Diaporama */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-blue-800 mb-4 text-center">
            Ajout et préparation du liant
          </h3>

          <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-xl shadow-2xl">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {liantImages.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`Préparation du liant ${idx + 1}`}
                  className="w-full flex-shrink-0 object-cover h-64 md:h-80"
                />
              ))}
            </div>

            {/* Flèches de navigation */}
            <button
              onClick={() =>
                setCurrentIndex(
                  (currentIndex - 1 + liantImages.length) % liantImages.length
                )
              }
              className="absolute top-1/2 left-2 -translate-y-1/2 bg-blue-700 text-white rounded-full p-2 hover:bg-blue-600 transition"
            >
              ‹
            </button>
            <button
              onClick={() =>
                setCurrentIndex((currentIndex + 1) % liantImages.length)
              }
              className="absolute top-1/2 right-2 -translate-y-1/2 bg-blue-700 text-white rounded-full p-2 hover:bg-blue-600 transition"
            >
              ›
            </button>
          </div>
        </div>
      </section>

      {/* Section Moulage */}
      <section
        id="moulage"
        className="py-16 px-6 md:px-24 bg-gradient-to-b from-yellow-50 to-yellow-100"
      >
        <div className="max-w-6xl mx-auto flex flex-col gap-12">
          {/* Titre principal */}
          <h2 className="text-3xl md:text-4xl font-poppins font-extrabold text-yellow-800 mb-8 text-center md:text-left drop-shadow-md">
            Le Moulage
          </h2>

          {/* Paragraphe introductif */}
          <p className="text-gray-800 text-lg md:text-xl leading-relaxed font-lato">
            Le moulage est l’étape durant laquelle le mélange homogène de
            charbon broyé, de liant et d’éventuels additifs est façonné sous
            forme de briquette, afin de faciliter leur manipulation, stockage et
            utilisation dans les systèmes de combustion tels que les chaudières
            à vapeur. Cette étape détermine la forme finale, la densité et la
            compacité du produit. Elle influence directement la qualité de
            combustion, la durée de vie du charbon, ainsi que son efficacité
            énergétique.
          </p>

          {/* Techniques de moulage */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition duration-500 border-l-4 border-yellow-500">
              <h4 className="text-xl font-bold text-yellow-700 mb-2">
                Moulage manuel
              </h4>
              <ul className="list-disc list-inside text-gray-800 font-lato">
                <li>Matériel utilisé : moule en bois, métal ou plastique</li>
                <li>Formes : Cylindres, parallélépipèdes, boulets, œufs</li>
                <li>
                  Procédé : Remplissage du moule, compactage, démoulage, séchage
                </li>
                <li>
                  Avantages : Peu coûteux, adapté aux petites productions
                  rurales
                </li>
                <li>Inconvénients : Long, fatigant, faible rendement</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition duration-500 border-l-4 border-yellow-500">
              <h4 className="text-xl font-bold text-yellow-700 mb-2">
                5.1.2 - Moulage à levier ou presse manuelle
              </h4>
              <ul className="list-disc list-inside text-gray-800 font-lato">
                <li>Production semi-industrielle ou industrielle</li>
                <li>
                  Types : Presse à vis manuelle/motorisée ou presse hydraulique
                </li>
                <li>
                  Avantages : Production rapide et en série, formes
                  personnalisables
                </li>
                <li>
                  Inconvénients : Nécessite investissement et maintenance
                  technique
                </li>
              </ul>
            </div>
          </div>

          {/* Formes courantes de briquettes */}
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition duration-500">
            <h4 className="text-xl font-bold text-yellow-700 mb-4">
              Formes courantes de briquettes
            </h4>
            <div className="grid md:grid-cols-2 gap-6 text-gray-800 font-lato">
              <div>
                <p className="font-semibold">Cylindrique</p>
                <ul className="list-disc list-inside">
                  <li>Densité homogène : Combustion lente et stable</li>
                  <li>Forme régulière : Empilage et transport facile</li>
                  <li>Durabilité mécanique : Pas de cassure</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold">Rectangulaire</p>
                <ul className="list-disc list-inside">
                  <li>Facile à stocker et empiler</li>
                </ul>
                <p className="font-semibold mt-4">Alvéolé</p>
                <ul className="list-disc list-inside">
                  <li>Meilleure circulation d’air et combustion</li>
                </ul>
                <p className="font-semibold mt-4">Boulet</p>
                <ul className="list-disc list-inside">
                  <li>Bonne tenue et esthétique</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Place pour 2 images côte à côte */}
          <div className="flex flex-col md:flex-row gap-6 mt-6">
            <div className="md:w-1/2">
              <img
                src="moulage1.jpeg"
                alt="Moulage 1"
                className="rounded-xl shadow-2xl w-full object-cover h-64 md:h-80 transform hover:scale-105 transition duration-500"
              />
            </div>
            <div className="md:w-1/2">
              <img
                src="moulage2.jpeg"
                alt="Moulage 2"
                className="rounded-xl shadow-2xl w-full object-cover h-64 md:h-80 transform hover:scale-105 transition duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section Séchage */}
      <section
        id="sechage"
        className="py-16 px-6 md:px-24 bg-gradient-to-b from-blue-50 to-blue-100"
      >
        <div className="max-w-6xl mx-auto flex flex-col gap-12">
          {/* Titre principal */}
          <h2 className="text-3xl md:text-4xl font-poppins font-extrabold text-blue-800 mb-8 text-center md:text-left drop-shadow-md">
            Le Séchage
          </h2>

          {/* Paragraphe introductif */}
          <p className="text-gray-800 text-lg md:text-xl leading-relaxed font-lato">
            Le séchage constitue une étape critique dans le processus de
            fabrication du charbon écologique, car il conditionne directement la
            qualité énergétique, la durabilité, la facilité d’allumage, ainsi
            que la résistance mécanique des briquettes. Un séchage mal maîtrisé
            entraîne une mauvaise combustion, une production de fumée excessive
            et une désintégration prématurée du produit.
          </p>

          {/* Objectifs */}
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition duration-500">
            <h4 className="text-xl font-bold text-blue-700 mb-4">
              Objectifs
            </h4>
            <ul className="list-disc list-inside text-gray-800 font-lato">
              <li>
                Réduire l’humidité résiduelle des briquettes pour atteindre un
                taux optimal entre 5% et 10%
              </li>
              <li>Stabiliser le produit avant son stockage ou utilisation</li>
              <li>Améliorer le pouvoir calorifique des briquettes</li>
              <li>Prévenir la formation de moisissures ou de bactéries</li>
            </ul>
          </div>

          {/* Méthodes de séchage */}
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition duration-500">
            <h4 className="text-xl font-bold text-blue-700 mb-4">
              Méthodes de séchage
            </h4>
            <div className="grid md:grid-cols-1 gap-6 text-gray-800 font-lato">
              {/* Séchage naturel */}
              <div className="bg-blue-50 p-4 rounded-xl shadow-inner">
                <p className="font-semibold mb-1">Séchage naturel</p>
                <p className="mb-1">
                  Méthode la plus courante à Madagascar, briquettes disposées
                  sur grilles, claies en bois ou bâches à l’abri de la pluie
                </p>
                <p className="mb-1">
                  Durée : 3 à 7 jours selon climat, humidité et épaisseur
                </p>
                <ul className="list-disc list-inside ml-4">
                  <li>Avantages : énergie gratuite, simple et peu coûteuse</li>
                  <li>
                    Inconvénients : dépendance à la météo, séchage parfois
                    inégal
                  </li>
                </ul>
              </div>

              {/* Séchage assisté */}
              <div className="bg-blue-50 p-4 rounded-xl shadow-inner">
                <p className="font-semibold mb-1">Séchage assisté</p>
                <p className="mb-1">
                  Utilise la chaleur d’un foyer ou four à basse température (40
                  à 60%), structures fermées possibles
                </p>
                <p className="mb-1">Durée : 8 à 24 heures</p>
                <ul className="list-disc list-inside ml-4">
                  <li>
                    Avantages : contrôle température et temps, séchage plus
                    rapide
                  </li>
                  <li>
                    Inconvénients : nécessite énergie thermique et
                    investissement
                  </li>
                </ul>
              </div>

              {/* Séchage industriel */}
              <div className="bg-blue-50 p-4 rounded-xl shadow-inner">
                <p className="font-semibold mb-1">Séchage industriel</p>
                <p className="mb-1">
                  Utilise systèmes automatisés : tunnel, convoyeur chauffé,
                  déshydrateur
                </p>
                <ul className="list-disc list-inside ml-4">
                  <li>Avantages : production de masse</li>
                  <li>
                    Inconvénients : inadapté aux zones rurales sans
                    infrastructure
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Place pour 2 images côte à côte */}
          <div className="flex flex-col md:flex-row gap-6 mt-6">
            <div className="md:w-1/2">
              <img
                src="sechage1.jpeg"
                alt="Séchage 1"
                className="rounded-xl shadow-2xl w-full object-cover h-64 md:h-80 transform hover:scale-105 transition duration-500"
              />
            </div>
            <div className="md:w-1/2">
              <img
                src="sechage2.jpeg"
                alt="Séchage 2"
                className="rounded-xl shadow-2xl w-full object-cover h-64 md:h-80 transform hover:scale-105 transition duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
