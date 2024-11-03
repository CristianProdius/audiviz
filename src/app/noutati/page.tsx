import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";

const news = [
  {
    title: 'Lansarea proiectului "Lumia Tactilă"',
    description:
      "Am lansat cu succes noul nostru proiect dedicat dezvoltării senzoriale a copiilor cu deficiențe de auz și văz.",
    image: "/images/1.png",
    date: "15 Octombrie 2023",
  },
  {
    title: "Seminar de instruire pentru părinți",
    description:
      "Un seminar interactiv pentru părinții copiilor cu deficiențe senzoriale, oferind strategii și suport.",
    image: "/images/2.png",
    date: "5 Noiembrie 2023",
  },
  {
    title: "Călătorie în lumea senzorială",
    description:
      "Un proiect de excursii pentru copiii cu deficiențe de auz și văz.",
    image: "/images/3.png",
    date: "15 Februarie 2024",
  },
  {
    title: "Culori și sunete",
    description:
      "Un atelier de pictură și muzică pentru copiii cu deficiențe de auz și văz.",
    image: "/images/4.png",
    date: "25 Martie 2024",
  },
];

export default function Noutati() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#1E3A8A] mb-12">
          Noutăți
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold text-[#1E3A8A] mb-2">
                  {item.title}
                </h2>
                <p className="text-gray-600 mb-4 text-sm">{item.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{item.date}</span>
                  <button className="px-4 py-2 bg-[#1E3A8A] text-white rounded-full text-sm hover:bg-blue-700 transition-colors">
                    Citește mai mult
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
