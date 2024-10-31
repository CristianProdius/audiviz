// components/Services/Services.tsx
import Image from "next/image";
import Link from "next/link";

const Services = () => {
  const services = [
    {
      icon: "👨‍👩‍👧‍👦", // Using emoji for the family icon
      title: "Suport pentru Familii",
      description:
        "Oferim consiliere și suport pentru familiile copiilor, pentru a le ajuta să facă față provocărilor și să își susțină copiii în dezvoltarea lor.",
      bgColor: "bg-[#9747FF]",
      textColor: "text-white",
    },
    {
      icon: "📚", // Using emoji or replace with actual icon image
      title: "Parteneriate cu școli",
      description:
        "Colaborăm cu școli și alte organizații pentru a integra copiii cu nevoi speciale în comunitate și pentru a le oferi oportunități egale.",
      bgColor: "bg-white",
      textColor: "text-gray-700",
    },
    {
      icon: "🔒", // Using emoji or replace with actual icon image
      title: "Terapie personalizată",
      description:
        "Oferim programe de terapie adaptate nevoilor individuale ale fiecărui copil",
      bgColor: "bg-white",
      textColor: "text-gray-700",
    },
    {
      icon: "🎲", // Using emoji or replace with actual icon image
      title: "Activități creative",
      description:
        "Organizăm ateliere de artă, muzică și mișcare, pentru a stimula creativitatea și dezvoltarea socială a copiilor.",
      bgColor: "bg-white",
      textColor: "text-gray-700",
    },
  ];

  return (
    <section className="relative px-4 py-16 bg-[#FAF9F6]">
      {/* Decorative Dots */}
      <div className="absolute top-12 left-12 w-3 h-3 rounded-full bg-[#FF725E]" />
      <div className="absolute bottom-12 right-12 w-3 h-3 rounded-full bg-[#FF725E]" />
      <div className="absolute top-1/2 left-1/3 w-3 h-3 rounded-full bg-[#1E2959]" />

      <div className="max-w-7xl mx-auto">
        {/* Container for flexible layout */}
        <div className="lg:flex lg:gap-12">
          {/* Main Content */}
          <div className="lg:w-1/2 lg:flex lg:items-center lg:justify-center mb-16 lg:mb-0 text-center lg:text-left">
            <div className="lg:max-w-xl">
              <h1 className="text-4xl font-bold text-[#1E2959] mb-4">
                Suntem Un <span className="text-[#9747FF]">ONG</span> Dedicat
                Copiilor Cu Deficiențe De{" "}
                <span className="text-[#9747FF]">Auz Si Văz</span>
              </h1>
              <p className="text-gray-700 mb-8">
                Suntem o echipă pasionată de a face o diferență în viața
                copiilor cu nevoi speciale. Oferim terapie, educație și suport
                pentru ca acești copii să se dezvolte armonios și să aibă parte
                de o copilărie frumoasă.
              </p>
              <Link
                href="/despre-noi"
                className="inline-block bg-[#9747FF] text-white px-8 py-3 rounded-full hover:bg-[#8A35FF] transition-colors duration-300"
              >
                Află Mai Mult
              </Link>
            </div>
          </div>

          {/* Services Grid */}
          <div className="lg:w-1/2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className={`${service.bgColor} rounded-3xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300`}
                >
                  <div className="flex flex-col h-full">
                    <div className="text-3xl mb-4">{service.icon}</div>
                    <h3
                      className={`text-xl font-semibold mb-3 ${service.textColor}`}
                    >
                      {service.title}
                    </h3>
                    <p
                      className={`${service.textColor} ${
                        index === 0 ? "opacity-90" : ""
                      }`}
                    >
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
