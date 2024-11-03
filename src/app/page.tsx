import Header from "@/components/header";
import Hero from "@/components/hero";
import Sponsors from "@/components/sponsori";
import Services from "@/components/servicii";
import EducationSection from "@/components/educationSection";
import BlogSection from "@/components/blogSection";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Sponsors />
      <Services />
      <EducationSection />
      <BlogSection />
      <Footer />
    </div>
  );
}
