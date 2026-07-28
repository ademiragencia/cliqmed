"use client";

import { useState } from "react";
import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Problema from "@/components/Problema";
import Especialidades from "@/components/Especialidades";
import CalculadoraRoi from "@/components/CalculadoraRoi";
import Metodo from "@/components/Metodo";
import Comparacao from "@/components/Comparacao";
import EticaMedica from "@/components/EticaMedica";
import Depoimentos from "@/components/Depoimentos";
import Marquee from "@/components/Marquee";
import Processo from "@/components/Processo";
import Garantia from "@/components/Garantia";
import Planos from "@/components/Planos";
import Faq from "@/components/Faq";
import CtaFinal from "@/components/CtaFinal";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import ModalDiagnostico from "@/components/ModalDiagnostico";
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
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Topbar />
      <Navbar onOpenDiagnostico={() => setIsModalOpen(true)} />
      <main>
        <Hero onOpenDiagnostico={() => setIsModalOpen(true)} />
        <Stats />
        <Problema />
        <Especialidades />
        <CalculadoraRoi />
        <Metodo />
        <Comparacao />
        <EticaMedica />
        <Depoimentos />
        <Marquee />
        <Processo />
        <Garantia />
        <Planos />
        <Faq />
        <CtaFinal onOpenDiagnostico={() => setIsModalOpen(true)} />
      </main>
      <Footer />
      <WhatsAppFloat />
      <ModalDiagnostico isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
