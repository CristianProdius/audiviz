"use client";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import { motion } from "framer-motion"; // First install: npm install framer-motion

export default function Despre() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      {/* Hero Section */}
      <div className="relative h-[600px]">
        <Image
          src="/images/CopiiDespre.png"
          alt="Copii invatand"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Cine Suntem Noi
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-3xl font-light">
            AudiViz este o organizație dedicată îmbunătățirii vieții copiilor cu
            deficiențe de auz și văz
          </p>
        </motion.div>
      </div>

      {/* Content Section */}
      <section className="max-w-7xl mx-auto px-8 py-20 bg-white shadow-xl rounded-3xl -mt-20 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          <h1 className="text-[#1E3A8A] text-4xl md:text-5xl font-bold text-center leading-tight">
            Despre Asociația De Suport Familial De Recuperare Timpurie A
            Copiilor Cu Deficiențe De Auz Și Văz{" "}
            <span className="text-purple-600 italic"> "AudiViz" </span>
          </h1>

          <p className="text-center text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            este o asociație non-profit, care activează în interesul
            copiilor/tinerilor cu deficiențe de auz și văz și a familiilor
            acestora, pentru a depăși barierele cu care se confruntă în domeniul
            social, medical și educațional.
          </p>

          {/* Purple Button */}
          <div className="flex justify-center">
            <button className="bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-purple-200 font-medium">
              Află ce beneficii și ce servicii dai
            </button>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            {[
              "Asistență recuperatorie",
              "Suport Tehnic Specializat",
              "Dezvoltarea abilităților de trai independent",
              "Pregătire pre-profesională",
              "Învățarea Limbajului semnelor",
              "Testarea auzului prin metoda de screening auditiv",
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all cursor-pointer group"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-400 group-hover:bg-red-500 transition-colors flex items-center justify-center shadow-md">
                  <div className="w-5 h-5 rounded-full bg-white/30"></div>
                </div>
                <span className="text-[#1E3A8A] text-lg font-semibold group-hover:text-purple-600 transition-colors">
                  {service}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
      {/* Disclaimer Section */}
      <section className="max-w-7xl mx-auto px-4 mb-20">
        <div className="bg-white rounded-[20px] p-6 md:p-8 shadow-md">
          <h2 className="text-[#1E3A8A] text-2xl font-bold text-center mb-6">
            Disclaimer
          </h2>

          <div className="space-y-4">
            <p className="text-gray-700 text-center text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
              Această pagină web a fost creată cu sprijinul financiar al Uniunii
              Europene. În cadrul Proiectului „EVOLVE4GE - Accelerarea
              egalității de gen, asigurând abilitarea femeilor prin oportunități
              economice, combaterea violenței și guvernarea sensibilă la gen"
              implementat de UN Women Moldova. Conținutul acesteia reprezintă
              responsabilitatea exclusivă a AO „AudiViz"
            </p>

            <p className="text-gray-500 text-center text-xs md:text-sm italic">
              Conținutul paginii web nu reflectă în mod necesar viziunea Uniunii
              Europene
            </p>

            {/* Logos Container */}
            <div className="flex flex-wrap items-center justify-center gap-8 mt-6">
              <div className="w-[120px] h-[40px] md:w-[140px] md:h-[45px] relative">
                <Image
                  src="/sponsors/EU.png"
                  alt="Finanțat de Uniunea Europeană"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="w-[120px] h-[40px] md:w-[140px] md:h-[45px] relative">
                <Image
                  src="/sponsors/EVOLVE.png"
                  alt="EVOLVE4GE"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="w-[120px] h-[40px] md:w-[140px] md:h-[45px] relative">
                <Image
                  src="/sponsors/UN-WOMEN.png"
                  alt="UN Women"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
