const EducationSection = () => {
  const categories = [
    {
      title: "Artă și culoare",
      description: "Creează, explorează și exprimă-te prin artă",
      icon: "🎨",
    },
    {
      title: "Muzică și ritm",
      description: "Descoperă lumea sunetelor și creează melodii minunate",
      icon: "🎵",
    },
    {
      title: "Natură și știință",
      description: "Explorează lumea din jurul tău și descoperă lucruri noi",
      icon: "🔬",
    },
    {
      title: "Comunicare și jocuri",
      description:
        "Îmbunătățește-ți abilitățile de comunicare și joacă-te cu alți copii",
      icon: "🎮",
    },
    {
      title: "Tehnologie și inovație",
      description:
        "Descoperă lumea digitală și creează propriile tale proiecte",
      icon: "💡",
    },
    {
      title: "Programe Sport",
      description: "Fii activ și sănătos alături de noi",
      icon: "🏸",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#1E2959] mb-4">
          Descopera Lumea Cu Noi!
        </h2>
        <p className="text-gray-700 text-xl">
          Proiectele noastre te invită să explorezi și să înveți.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-all duration-300"
          >
            <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center bg-[#f3e8ff] rounded-full text-2xl aspect-square">
              {category.icon}
            </div>
            <div>
              <h3 className="font-semibold text-xl text-blue-900 mb-1">
                {category.title}
              </h3>
              <p className="text-lg text-gray-600">{category.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationSection;
