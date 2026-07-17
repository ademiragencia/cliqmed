import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
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
  title: "Cliqmed | Marketing Digital para Clínicas e Consultórios",
  description:
    "A agência que transforma anúncio em consulta marcada. Tráfego pago, conteúdo e funil para encher a agenda da sua clínica em até 30 dias. Diagnóstico gratuito.",
  keywords: [
    "agência de marketing para clínicas",
    "marketing digital para consultórios",
    "tráfego pago para clínicas",
    "Meta Ads para clínicas",
    "Google Ads para consultórios",
    "marketing para odontologia",
    "marketing para clínica de estética",
    "como conseguir mais pacientes",
  ],
  authors: [{ name: "Cliqmed" }],
  robots: { index: true, follow: true, "max-image-preview": "large" },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Cliqmed",
    locale: "pt_BR",
    title: "Cliqmed | Marketing Digital para Clínicas e Consultórios",
    description:
      "Menos likes. Mais pacientes. Tráfego pago, conteúdo e funil para encher a agenda da sua clínica em até 30 dias.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cliqmed | Marketing Digital para Clínicas",
    description: "Menos likes. Mais pacientes. Agenda cheia em até 30 dias.",
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": SITE_URL + "/",
  name: "Cliqmed",
  alternateName: "Cliqmed Agência de Marketing Digital para Clínicas",
  description:
    "Agência de marketing digital especializada em clínicas e consultórios. Tráfego pago, gestão de redes sociais e produção de conteúdo para atrair mais pacientes.",
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
    reviewCount: "12",
  },
  makesOffer: [
    {
      "@type": "Offer",
      name: "Plano Essencial",
      description:
        "Gestão de Instagram com 12 posts por mês, conteúdo, legendas e relatório mensal.",
      price: "2500",
      priceCurrency: "BRL",
    },
    {
      "@type": "Offer",
      name: "Plano Crescimento",
      description:
        "Gestão de redes sociais + campanhas de tráfego pago no Meta Ads com verba inclusa.",
      price: "4000",
      priceCurrency: "BRL",
    },
    {
      "@type": "Offer",
      name: "Plano Autoridade",
      description:
        "Gestão completa: redes sociais, Meta Ads, Google Ads, produção de Reels e funil de captação.",
      price: "6500",
      priceCurrency: "BRL",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${body.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
