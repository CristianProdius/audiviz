import Image from "next/image";
import Link from "next/link";
import { Instagram } from "lucide-react";
import { Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white py-8 px-4 md:pt-12 md:pb-4">
      <div className="max-w-[400px] mx-auto flex flex-col items-center md:hidden">
        {/* Mobile Layout */}
        <div className="w-full space-y-6">
          {/* Title and Newsletter Section */}
          <div className="text-center">
            <h3 className="text-[#1a237e] text-2xl font-bold mb-2">
              Tine Legatura Cu Noi
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Aboneaza-te la noutatile noastre, si primeste emailuri despre
              activitati.
            </p>
          </div>

          {/* Email Input */}
          <div className="space-y-3">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#1a237e]"
            />
            <button className="w-full bg-[#1a237e] text-white py-3 rounded-lg font-medium">
              Aboneazate
            </button>
          </div>

          {/* Logo */}
          <div className="pt-8">
            <Image
              src="/Logo.png"
              alt="AudiViz Logo"
              width={80}
              height={80}
              className="mx-auto mb-4"
            />
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-4">
            <Link href="https://instagram.com" aria-label="Instagram">
              <Instagram size={24} />
            </Link>
            <Link href="https://facebook.com" aria-label="Facebook">
              <Facebook size={24} />
            </Link>
          </div>

          {/* Contact Info */}
          <div className="text-center text-gray-600 text-sm">
            <p>Balti, Belti, Moldova</p>
            <p>(+373) 76 112 233</p>
          </div>

          {/* Copyright */}
          <div className="text-center text-gray-600 text-sm pt-4">
            <p>© AudiViz. Toate drepturile rezervate.</p>
          </div>
        </div>
      </div>

      {/* Desktop Layout - Hidden on Mobile */}
      <div className="hidden md:block">
        <div className="max-w-7xl mx-auto px-4 ">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            {/* Logo and Contact Section */}
            <div className="flex flex-col gap-4">
              <Image
                src="/Logo.png"
                alt="AudiViz Logo"
                width={80}
                height={80}
                className="mb-4"
              />

              <div className="flex gap-4 mb-4">
                <Link href="https://instagram.com" className="text-[#1a237e]">
                  <Instagram size={24} />
                </Link>
                <Link href="https://facebook.com" className="text-[#1a237e]">
                  <Facebook size={24} />
                </Link>
              </div>

              <div className="text-gray-600 text-sm">
                <p>Balti, Belti, Moldova</p>
                <p>(+373) 76 112 233</p>
              </div>
            </div>

            {/* Newsletter Section */}
            <div className="md:max-w-md w-full">
              <h3 className="text-3xl font-bold text-[#1a237e] mb-2">
                Tine Legatura Cu Noi
              </h3>
              <p className="text-gray-600 mb-4">
                Aboneaza-te la noutatile noastre, si primeste emailuri despre
                activitati.
              </p>

              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Email"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1a237e]"
                />
                <button className="bg-[#1a237e] text-white px-6 py-2 rounded-lg hover:bg-[#2a337e] transition-colors">
                  Aboneaza-te
                </button>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-4 border-t border-gray-200">
            <p className="text-center text-sm text-gray-600">
              © AudiViz. Toate drepturile rezervate.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
