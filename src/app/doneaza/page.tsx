import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";

export default function Doneaza() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <div className="relative h-[400px]">
        <Image
          src="/images/4.png"
          alt="Copii zâmbind"
          fill
          className="object-cover brightness-50"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Susține Cauza Noastră
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-3xl">
            Ajută-ne să facem o diferență în viața copiilor cu deficiențe de auz
            și văz
          </p>
        </div>
      </div>

      {/* Donation Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - Information */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-[#1E3A8A]">
              Cum Poți Ajuta?
            </h2>
            <p className="text-gray-600">Donația ta ne ajută să oferim:</p>
            <ul className="space-y-4">
              {[
                "Echipamente specializate pentru copii",
                "Sesiuni de terapie și recuperare",
                "Materiale educaționale adaptate",
                "Suport pentru familii",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>

            {/* Impact Statistics */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  100+
                </div>
                <div className="text-sm text-gray-600">Copii Ajutați</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  50+
                </div>
                <div className="text-sm text-gray-600">Familii Sprijinite</div>
              </div>
            </div>
          </div>

          {/* Right Column - Donation Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-[#1E3A8A] mb-6">
              Donează Acum
            </h3>
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="block text-gray-700">Suma (MDL)</label>
                <div className="grid grid-cols-3 gap-4">
                  {[100, 200, 500].map((amount) => (
                    <button
                      key={amount}
                      type="button"
                      className="py-2 px-4 border-2 border-purple-500 rounded-lg text-purple-600 hover:bg-purple-50 transition-colors"
                    >
                      {amount} MDL
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-gray-700">Altă sumă</label>
                <input
                  type="number"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Introduceți suma"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-gray-700">Detalii Personale</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Numele și Prenumele"
                />
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Email"
                />
              </div>

              <button className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors">
                Donează
              </button>

              <p className="text-sm text-gray-500 text-center">
                Toate donațiile sunt procesate securizat
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Bank Details Section */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#1E3A8A] mb-6 text-center">
            Detalii Bancare
          </h2>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Transfer Bancar</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Beneficiar: AO "AudiViz"</li>
                  <li>IBAN: MD12XXXXXXXXXXXXX</li>
                  <li>Banca: Example Bank</li>
                  <li>Cod Fiscal: 123456789</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Important</h3>
                <p className="text-gray-600">
                  Vă rugăm să menționați "Donație" în descrierea transferului.
                  Veți primi o confirmare pe email după procesarea donației.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
