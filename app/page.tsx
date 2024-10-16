import Header from "@/components/Header";
import CareerAndSkills from "@/components/CareerAndSkills";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main>
      {/* Navigation Section */}
      <Navbar />

      {/* Header Section */}
      <Header />

      {/* Career and Skills Section */}
      <CareerAndSkills />

      {/* Portfolio Section */}
      <Portfolio />

      {/* Services Section */}
      <Services />

      {/* Contact Section */}
      <Contact />

      <Footer />
    </main>
  );
}
