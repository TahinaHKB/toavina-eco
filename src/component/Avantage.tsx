export function Avantage()
{
    return (
      <section
        id="advantages"
        className="py-16 sm:py-20 bg-white px-4 sm:px-6 md:px-16"
      >
        <h3 className="text-2xl sm:text-3xl font-bold text-center text-green-700 mb-12">
          Pourquoi choisir le charbon écologique ?
        </h3>

        {/* Cartes */}
        <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <div className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-lg transition w-full">
            <h4 className="text-lg sm:text-xl font-semibold text-green-600 mb-4">
              🌱 Écologique
            </h4>
            <p className="text-gray-600 text-sm sm:text-base">
              Réduit la coupe des arbres et valorise les déchets agricoles en
              énergie propre.
            </p>
          </div>

          <div className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-lg transition w-full">
            <h4 className="text-lg sm:text-xl font-semibold text-green-600 mb-4">
              🔥 Performant
            </h4>
            <p className="text-gray-600 text-sm sm:text-base">
              Pouvoir calorifique élevé, faible fumée et meilleure efficacité
              que le charbon classique.
            </p>
          </div>

          <div className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-lg transition w-full">
            <h4 className="text-lg sm:text-xl font-semibold text-green-600 mb-4">
              💼 Économique
            </h4>
            <p className="text-gray-600 text-sm sm:text-base">
              Source d’emplois locaux et opportunité pour des projets
              entrepreneuriaux durables.
            </p>
          </div>
        </div>
      </section>
    );
}