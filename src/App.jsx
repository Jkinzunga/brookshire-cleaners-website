import { useReveal } from './hooks/useReveal';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Reviews from './components/Reviews';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import WhyUs from './components/WhyUs';
import VisitUs from './components/VisitUs';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  useReveal();
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Reviews />
        <Services />
        <HowItWorks />
        <WhyUs />
        <VisitUs />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
