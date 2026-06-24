import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedVideo from "@/components/FeaturedVideo";
import WhyWorkWithPavan from "@/components/WhyWorkWithPavan";
import Services from "@/components/Services";
import SuccessStories from "@/components/SuccessStories";
import FeaturedContent from "@/components/FeaturedContent";
import Brands from "@/components/Brands";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeaturedVideo />
        <WhyWorkWithPavan />
        <Services />
        <SuccessStories />
        <FeaturedContent />
        <Brands />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
