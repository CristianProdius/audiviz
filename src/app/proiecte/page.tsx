import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";

const projects = [
  {
    title: "LUMIA TACTILĂ",
    description:
      "Un proiect unic pentru dezvoltarea senzorială a copiilor cu deficiențe de auz și văz.",
    image: "/images/CopiiDespre.png",
    date: "Octombrie 2023",
  },
  {
    title: "SIMȚUL SPERANȚEI",
    description:
      "Ajutăm copiii să-și dezvolte abilitățile prin metode inovatoare de terapie senzorială.",
    image: "/images/1.png",
    date: "Noiembrie 2023",
  },
  {
    title: "CĂRȚI PENTRU TOȚI",
    description:
      "O campanie de strângere de fonduri pentru achiziționarea de cărți în format Braille.",
    image: "/images/2.png",
    date: "Decembrie 2023",
  },
  {
    title: "CINEMA FĂRĂ BARIERE",
    description:
      "O serie de proiecții speciale pentru copiii cu deficiențe de auz și văz.",
    image: "/images/3.png",
    date: "Ianuarie 2024",
  },
  {
    title: "CĂLĂTORIE ÎN LUMEA SENZORIALĂ",
    description:
      "Un proiect de excursii pentru copiii cu deficiențe de auz și văz.",
    image: "/images/4.png",
    date: "Februarie 2024",
  },
  {
    title: "CULORI ȘI SUNETE",
    description:
      "Un atelier de pictură și muzică pentru copiii cu deficiențe de auz și văz.",
    image: "/images/5.png",
    date: "Martie 2024",
  },
];

export default function ProiecteleNoastre() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-blue-900 mb-12">
          Proiectele Noastre
        </h1>

        <div className="grid md:grid-cols-2 gap-8 px-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 "
            >
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-blue-800 mb-2">
                  {project.title}
                </h2>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{project.date}</span>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
                    Află mai multe
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
