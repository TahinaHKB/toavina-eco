import { Footer } from "../component/Footer";
import Menu from "../component/Nav";
import heroImg from "/avantageHeroes.jpg"; 
import { motion } from "framer-motion";

export default function Avantage() {
    const avantages = [
      {
        title: "Écologique",
        desc: "Utilise des déchets organiques (copeaux, paille, coques, etc.), réduit la déforestation et valorise les biodéchets.",
        icon: "🌱",
      },
      {
        title: "Moins polluant",
        desc: "Dégage moins de fumée et de gaz nocifs (CO, CO₂, particules) que le charbon de bois traditionnel.",
        icon: "💨",
      },
      {
        title: "Économique",
        desc: "Matières premières gratuites ou peu coûteuses, réduit les dépenses en énergie.",
        icon: "💰",
      },
      {
        title: "Accessible",
        desc: "Fabrication simple, réalisable à petite échelle avec des outils locaux.",
        icon: "🔧",
      },
      {
        title: "Performance énergétique",
        desc: "Brûle longtemps avec une chaleur constante, idéal pour la cuisson et le chauffage.",
        icon: "🔥",
      },
      {
        title: "Création d’emplois",
        desc: "Production locale générant des activités économiques durables.",
        icon: "👷‍♂️",
      },
      {
        title: "Facile à stocker et transporter",
        desc: "Briquettes légères, compactes et propres, sans poussière noire.",
        icon: "📦",
      },
    ];
  return (
    <div className="w-full overflow-hidden font-lato">
      <Menu />

      {/* Hero */}
      <section
        className="h-screen bg-cover bg-center flex flex-col items-center justify-center text-white text-center px-4"
        style={{
          backgroundImage: `url(${heroImg})`,
        }}
      >
        <div className="bg-black bg-opacity-70 p-8 rounded-xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Les Avantages du Charbon Écologique
          </h1>
          <p className="text-lg md:text-xl">
            Une énergie durable, économique et respectueuse de l’environnement.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-6 md:px-20 max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
          Pourquoi choisir le charbon écologique ?
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed text-justify">
          Le charbon écologique présente de nombreux avantages qui en font une
          alternative idéale au charbon traditionnel. Il permet de réduire la
          déforestation, limite les émissions de gaz à effet de serre et
          contribue à la protection de l’environnement. En plus, sa combustion
          est plus efficace et produit moins de fumée. Il représente donc une
          solution durable, économique et respectueuse de notre planète.
        </p>
      </section>

      <section className="py-20 px-6 md:px-20 bg-gradient-to-br from-green-50 via-white to-green-100">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
        >
          Les principaux avantages du charbon écologique
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-600 max-w-2xl mx-auto mb-12"
        >
          Une alternative durable, économique et respectueuse de l’environnement,
          adaptée aux ménages, petites industries et zones rurales.
        </motion.p>
      </div>

      {/* Grille avec animations */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {avantages.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 text-center flex flex-col items-center"
          >
            <div className="text-4xl mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold text-green-700 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>

      {/* Tableau comparatif */}
      <section className="py-16 px-6 md:px-20 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
          Tableau comparatif et avantages du charbon écologique
        </h2>

        <div className="overflow-x-auto shadow-lg rounded-xl">
          <table className="w-full border-collapse text-left text-gray-700">
            <thead className="bg-green-600 text-white">
              <tr>
                <th className="p-4">Critère</th>
                <th className="p-4">Diesel fossile</th>
                <th className="p-4">Diesel synthétique (F-T)</th>
                <th className="p-4">Charbon écologique</th>
              </tr>
            </thead>
            <tbody>
              <tr className="odd:bg-gray-50 even:bg-white">
                <td className="p-4 font-semibold">Source</td>
                <td className="p-4">Importée</td>
                <td className="p-4">Produite localement (complexe)</td>
                <td className="p-4">Produite localement (simple)</td>
              </tr>
              <tr className="odd:bg-gray-50 even:bg-white">
                <td className="p-4 font-semibold">Coût de production</td>
                <td className="p-4">Élevé (importé)</td>
                <td className="p-4">Très élevé</td>
                <td className="p-4">Faible</td>
              </tr>
              <tr className="odd:bg-gray-50 even:bg-white">
                <td className="p-4 font-semibold">Technologie requise</td>
                <td className="p-4">Standard</td>
                <td className="p-4">Avancée, industrielle</td>
                <td className="p-4">Simple, artisanale</td>
              </tr>
              <tr className="odd:bg-gray-50 even:bg-white">
                <td className="p-4 font-semibold">Émissions CO₂</td>
                <td className="p-4">Élevées</td>
                <td className="p-4">Moyennes à élevées</td>
                <td className="p-4">Faibles à neutres</td>
              </tr>
              <tr className="odd:bg-gray-50 even:bg-white">
                <td className="p-4 font-semibold">
                  Accessibilité à Madagascar
                </td>
                <td className="p-4">Forte dépendance</td>
                <td className="p-4">Limitée</td>
                <td className="p-4">Très accessible</td>
              </tr>
              <tr className="odd:bg-gray-50 even:bg-white">
                <td className="p-4 font-semibold">
                  Rendement énergétique (système)
                </td>
                <td className="p-4">35–40 %</td>
                <td className="p-4">40–45 %</td>
                <td className="p-4">30–40 % (en vapeur)</td>
              </tr>
              <tr className="odd:bg-gray-50 even:bg-white">
                <td className="p-4 font-semibold">Niveau de maintenance</td>
                <td className="p-4">Moyen</td>
                <td className="p-4">Élevé</td>
                <td className="p-4">Faible</td>
              </tr>
              <tr className="odd:bg-gray-50 even:bg-white">
                <td className="p-4 font-semibold">
                  Durabilité environnementale
                </td>
                <td className="p-4">Faible</td>
                <td className="p-4">Moyenne</td>
                <td className="p-4 font-bold text-green-600">Élevée ✅</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <Footer />
    </div>
  );
}
