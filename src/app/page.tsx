import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Problem from '@/components/Problem';
import ValueProposition from '@/components/ValueProposition';
import Benefits from '@/components/Benefits';
import HowItWorks from '@/components/HowItWorks';
import Security from '@/components/Security';
import Testimonials from '@/components/Testimonials';
import CTAForm from '@/components/CTAForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <ValueProposition />
        <Benefits />
        <HowItWorks />
        <Security />
        <Testimonials />
        <CTAForm />
      </main>
      <Footer />
    </>
  );
}
