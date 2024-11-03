import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

export default function Contact() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <div className="relative h-[400px]">
        <Image
          src="/images/3.png"
          alt="Contact AudiViz"
          fill
          className="object-cover brightness-50"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Informații de Contact
          </h1>
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info & Form */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-[#1E3A8A] mb-6">
                Trimite-ne un mesaj
              </h2>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Numele tău"
                    className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                  <input
                    type="email"
                    placeholder="Email-ul tău"
                    className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subiectul mesajului"
                  className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <textarea
                  placeholder="Scrie mesajul tău aici..."
                  rows={6}
                  className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                ></textarea>
                <button className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors">
                  Trimite Mesajul
                </button>
              </form>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-[#1E3A8A] mb-4">
                Urmărește-ne
              </h3>
              <div className="flex gap-4">
                <a href="#" className="text-blue-600 hover:text-blue-700">
                  <FaFacebook size={24} />
                </a>
                <a href="#" className="text-pink-600 hover:text-pink-700">
                  <FaInstagram size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Map & Contact Details */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-[#1E3A8A] mb-6">
                Unde ne găsești
              </h2>
              <div className="h-[300px] rounded-lg overflow-hidden mb-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=YOUR_MAP_EMBED_CODE"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <FaMapMarkerAlt className="text-purple-600" size={20} />
                  <div>
                    <p className="text-gray-700">Bălți, Rep. Moldova</p>
                    <p className="text-gray-500">Str. Example, nr. 123</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FaPhone className="text-purple-600" size={20} />
                  <p className="text-gray-700">(+373) 78 12 233</p>
                </div>
                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-purple-600" size={20} />
                  <p className="text-gray-700">info@audiviz.org</p>
                </div>
                <div className="flex items-center gap-3">
                  <FaClock className="text-purple-600" size={20} />
                  <div>
                    <p className="text-gray-700">Luni - Vineri: 9:00 - 17:00</p>
                    <p className="text-gray-500">Sâmbătă - Duminică: Închis</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
