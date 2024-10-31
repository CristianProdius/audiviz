"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 ">
            <Link href="/">
              <Image
                src="/Logo.png"
                alt="Logo"
                width={60}
                height={60}
                className="h-20 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              href="/despre-noi"
              className="text-gray-700 hover:text-blue-900 transition-colors duration-200"
            >
              Despre Noi
            </Link>
            <Link
              href="/proiecte"
              className="text-gray-700 hover:text-blue-900 transition-colors duration-200"
            >
              Proiecte
            </Link>
            <Link
              href="/noutati"
              className="text-gray-700 hover:text-blue-900 transition-colors duration-200"
            >
              Noutăți
            </Link>
            <Link
              href="/doneaza"
              className="text-gray-700 hover:text-blue-900 transition-colors duration-200"
            >
              Donează
            </Link>
          </nav>

          {/* Right Section */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Switcher */}
            <div className="flex space-x-2">
              <button className="p-1" aria-label="Russian">
                <Image
                  src="/flags/ru.png"
                  alt="Russian"
                  width={24}
                  height={16}
                  className="w-6 h-4"
                />
              </button>
              <button className="p-1" aria-label="Romanian">
                <Image
                  src="/flags/ro.png"
                  alt="Romanian"
                  width={24}
                  height={16}
                  className="w-6 h-4"
                />
              </button>
            </div>

            {/* Contact Button */}
            <Link
              href="/contact"
              className="bg-blue-900 text-white px-6 py-2 rounded-md hover:bg-blue-800 transition-colors duration-200"
            >
              Contactează-Ne
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-700"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/despre-noi"
                className="block px-3 py-2 text-gray-700 hover:text-blue-900"
              >
                Despre Noi
              </Link>
              <Link
                href="/proiecte"
                className="block px-3 py-2 text-gray-700 hover:text-blue-900"
              >
                Proiecte
              </Link>
              <Link
                href="/noutati"
                className="block px-3 py-2 text-gray-700 hover:text-blue-900"
              >
                Noutăți
              </Link>
              <Link
                href="/doneaza"
                className="block px-3 py-2 text-gray-700 hover:text-blue-900"
              >
                Donează
              </Link>

              <div className="flex items-center space-x-2 px-3 py-2">
                <button aria-label="Russian">
                  <Image
                    src="/flags/ru.png"
                    alt="Russian"
                    width={24}
                    height={16}
                    className="w-6 h-4"
                  />
                </button>
                <button aria-label="Romanian">
                  <Image
                    src="/flags/ro.png"
                    alt="Romanian"
                    width={24}
                    height={16}
                    className="w-6 h-4"
                  />
                </button>
              </div>

              <Link
                href="/contact"
                className="block px-3 py-2 text-center bg-blue-900 text-white rounded-md hover:bg-blue-800"
              >
                Contactează-Ne
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
