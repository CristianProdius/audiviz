// components/hero-server.jsx
import Image from "next/image";
import Link from "next/link";
import { getHeroContent } from "@/lib/api";

export default async function HeroServer() {
  const pageData = await getHeroContent();

  if (!pageData || !pageData.acfHeroFields) {
    return (
      <div className="min-h-[600px] flex items-center justify-center">
        No hero data available
      </div>
    );
  }

  const {
    heroHeading,
    heroSubheading,
    heroButtonText,
    heroButtonLink,
    heroSmileIcon,
    herobasketballicon,
    imagineaCuCopil,
  } = pageData.acfHeroFields;

  return (
    <section className="relative bg-white min-h-[600px] overflow-hidden">
      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="z-10 max-w-xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-[#1E2959] mb-6">
              {heroHeading}
            </h1>
            <p className="text-gray-600 text-lg mb-8">{heroSubheading}</p>
            <Link
              href={heroButtonLink || "/despre-noi"}
              className="inline-block bg-[#9747FF] text-white px-8 py-3 rounded-full hover:bg-[#8A35FF] transition-colors duration-300"
            >
              {heroButtonText || "Despre Noi"}
            </Link>
          </div>

          {/* Right Content */}
          <div className="relative w-full lg:w-auto">
            {/* Purple Background Shapes */}
            <div className="absolute right-0 top-0 w-[120%] h-[120%] bg-[#9747FF] rounded-l-full -z-10 transform translate-x-1/4 hidden lg:block" />
            <div className="absolute right-0 top-0 w-full h-full bg-[#9747FF] rounded-3xl -z-10 lg:hidden" />

            {/* Main Image */}
            <div className="relative z-10 flex justify-center lg:justify-start">
              {imagineaCuCopil?.node ? (
                <Image
                  src={imagineaCuCopil.node.sourceUrl}
                  alt={imagineaCuCopil.node.altText || "Hero image"}
                  width={600}
                  height={400}
                  className="object-contain w-full max-w-[80%] lg:max-w-full"
                  priority
                />
              ) : (
                <Image
                  src="/images/HeroChildren.png"
                  alt="Default hero image"
                  width={600}
                  height={400}
                  className="object-contain w-full max-w-[80%] lg:max-w-full"
                  priority
                />
              )}
            </div>

            {/* Floating Cards */}
            <div className="hidden sm:flex absolute top-[-10px] right-0 lg:right-[-15px] bg-white p-3 rounded-xl shadow-lg items-center gap-2 z-20 flex-col scale-75 lg:scale-100">
              <div className="bg-[#9747FF]/10 p-2 rounded-lg">
                {herobasketballicon?.node && (
                  <Image
                    src={herobasketballicon.node.sourceUrl}
                    alt={herobasketballicon.node.altText || "Basketball icon"}
                    width={64}
                    height={64}
                  />
                )}
              </div>
              <span className="text-[#1E2959] font-medium whitespace-nowrap">
                Distracție
              </span>
            </div>

            <div className="hidden absolute bottom-[-16px] left-[-24px] lg:left-[-24px] bg-white p-3 rounded-xl shadow-lg sm:flex flex-col items-center gap-2 z-20 scale-75 lg:scale-100">
              <div className="bg-[#9747FF]/10 p-2 rounded-lg">
                {heroSmileIcon?.node && (
                  <Image
                    src={heroSmileIcon.node.sourceUrl}
                    alt={heroSmileIcon.node.altText || "Smile icon"}
                    width={64}
                    height={64}
                  />
                )}
              </div>
              <span className="text-[#1E2959] font-medium whitespace-nowrap">
                Zâmbete
              </span>
            </div>

            {/* Decorative Dots */}
            <div className="hidden lg:block absolute top-1/4 right-1/4 w-4 h-4 bg-[#1E2959] rounded-full opacity-20" />
            <div className="hidden lg:block absolute top-1/3 right-1/3 w-3 h-3 bg-[#1E2959] rounded-full opacity-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
