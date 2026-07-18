import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Diferenciais from "@/components/Diferenciais";
import Servicos from "@/components/Servicos";
import Vistos from "@/components/Vistos";
import Jornada from "@/components/Jornada";
import MissaoValores from "@/components/MissaoValores";
import Planos from "@/components/Planos";
import Depoimentos from "@/components/Depoimentos";
import Transparencia from "@/components/Transparencia";
import Formulario from "@/components/Formulario";
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
      <Navbar />
      <main>
        <Hero />
        <Diferenciais />
        <Servicos />
        <Vistos />
        <Jornada />
        <Planos />
        <Formulario />
        <Depoimentos />
        <MissaoValores />
        <Transparencia />
        <Faq />
        <CtaFinal />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
