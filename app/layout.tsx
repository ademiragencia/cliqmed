import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Cliqmed | Agência #1 de Marketing Digital para Clínicas e Consultórios",
  description:
    "A agência de marketing médico e odontológico que transforma anúncio em consulta marcada. Tráfego pago no Meta & Google Ads, Instagram de autoridade e funil no WhatsApp. Diagnóstico gratuito.",
  keywords: [
    "agência de marketing para clínicas",
    "marketing digital para consultórios",
    "tráfego pago para clínicas",
    "agência de marketing médico",
    "marketing para odontologia",
    "marketing para harmonização facial",
    "marketing para clínica de estética",
    "Google Ads para médicos",
    "Meta Ads para clínicas",
    "como conseguir mais pacientes particulares",
    "gestão de tráfego pago saúde",
    "Resolução CFM 2.336/2023",
  ],
  authors: [{ name: "Cliqmed Marketing Médico" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Cliqmed Marketing Digital Médico",
    locale: "pt_BR",
    title: "Cliqmed | Agência #1 de Marketing para Clínicas e Consultórios",
    description:
      "Menos likes. Mais pacientes. Tráfego pago, conteúdo de autoridade e funil para encher a agenda da sua clínica em até 30 dias.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cliqmed | Marketing Digital para Clínicas e Consultórios",
    description: "Menos likes. Mais pacientes particulares. Agenda cheia em até 30 dias.",
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

const structuredDataSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": SITE_URL + "/#organization",
    name: "Cliqmed",
    alternateName: "Cliqmed Agência de Marketing Digital para Clínicas",
    description:
      "Agência de marketing digital de alta performance especializada em clínicas, consultórios médicos e odontológicos. Tráfego pago no Meta e Google Ads, Instagram e conversão via WhatsApp.",
    url: SITE_URL + "/",
    telephone: "+5567981082158",
    email: "contato@cliqmed.com.br",
    priceRange: "R$2.500 - R$6.500",
    areaServed: { "@type": "Country", name: "Brasil" },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Campo Grande",
      addressRegion: "MS",
      addressCountry: "BR",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "28",
    },
    makesOffer: [
      {
        "@type": "Offer",
        name: "Plano Essencial",
        description:
          "Gestão de Instagram profissional com 12 posts por mês, conteúdo, legendas e conformidade CFM/CFO.",
        price: "2500",
        priceCurrency: "BRL",
      },
      {
        "@type": "Offer",
        name: "Plano Crescimento",
        description:
          "Gestão de redes sociais + tráfego pago no Meta Ads com R$ 1.000 de verba inclusa.",
        price: "4000",
        priceCurrency: "BRL",
      },
      {
        "@type": "Offer",
        name: "Plano Autoridade 360",
        description:
          "Gestão completa de marketing para clínicas: Instagram, Meta Ads, Google Ads, Reels e funil de WhatsApp.",
        price: "6500",
        priceCurrency: "BRL",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Início",
        item: SITE_URL + "/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Especialidades Médicas",
        item: SITE_URL + "/#especialidades",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Calculadora de ROI",
        item: SITE_URL + "/#calculadora",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Planos de Gestão",
        item: SITE_URL + "/#planos",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Como encher a agenda da sua clínica em 30 dias com marketing médico",
    description: "Método de 3 passos para atração e agendamento de pacientes particulares.",
    step: [
      {
        "@type": "HowToStep",
        name: "Atração Qualificada",
        text: "Campanhas de tráfego pago no Meta Ads e Google Ads direcionadas ao público local da especialidade.",
      },
      {
        "@type": "HowToStep",
        name: "Conversão e Autoridade",
        text: "Página de captura e Instagram estruturados para gerar desejo e confiança respeitando as regras CFM/CFO.",
      },
      {
        "@type": "HowToStep",
        name: "Agendamento no WhatsApp",
        text: "Atendimento ágil da recepção com scripts validados para transformar leads em consultas confirmadas.",
      },
    ],
  },
];

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${body.variable}`}>
      <head>
        <meta name="theme-color" content="#05070A" />
      </head>
      <body>
        {structuredDataSchemas.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
        {children}
      </body>
    </html>
  );
}
