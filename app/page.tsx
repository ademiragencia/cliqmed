import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Problema from "@/components/Problema";
import Metodo from "@/components/Metodo";
import Comparacao from "@/components/Comparacao";
import Depoimentos from "@/components/Depoimentos";
import Marquee from "@/components/Marquee";
import Processo from "@/components/Processo";
import Garantia from "@/components/Garantia";
import Planos from "@/components/Planos";
import Faq from "@/components/Faq";
import CtaFinal from "@/components/CtaFinal";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { FAQS } from "@/lib/site";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Topbar />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Problema />
        <Metodo />
        <Comparacao />
        <Depoimentos />
        <Marquee />
        <Processo />
        <Garantia />
        <Planos />
        <Faq />
        <CtaFinal />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
