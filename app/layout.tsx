import type { Metadata } from "next";
import { Poppins, Montserrat } from "next/font/google";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const display = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const body = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "BlueVisa | Assessoria para Visto Americano 100% Online",
  description:
    "Seu visto americano, sem complicação. A BlueVisa cuida do DS-160, da guia de pagamento, do agendamento e da preparação para a entrevista — assessoria 100% online, do início ao fim.",
  keywords: [
    "assessoria visto americano",
    "como tirar visto americano",
    "preenchimento DS-160",
    "agendamento entrevista visto americano",
    "visto de turismo EUA",
    "visto B1 B2",
    "renovação de visto americano",
    "visto americano para família",
  ],
  authors: [{ name: "BlueVisa" }],
  robots: { index: true, follow: true, "max-image-preview": "large" },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "BlueVisa",
    locale: "pt_BR",
    title: "BlueVisa | Assessoria para Visto Americano 100% Online",
    description:
      "Seu sonho americano começa aqui. Cuidamos da burocracia do visto — DS-160, agendamento e preparação para a entrevista — para você focar na viagem.",
  },
  twitter: {
    card: "summary_large_image",
    title: "BlueVisa | Assessoria para Visto Americano",
    description: "Seu visto americano, sem complicação. Assessoria 100% online.",
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": SITE_URL + "/",
  name: "BlueVisa",
  alternateName: "BlueVisa Assessoria de Vistos Americanos",
  slogan: "Seu sonho americano começa aqui.",
  description:
    "Assessoria particular e independente para vistos americanos: análise de perfil, preenchimento do DS-160, agendamento e preparação para a entrevista. Orientação administrativa, sem vínculo com o governo dos EUA e sem garantia de aprovação.",
  url: SITE_URL + "/",
  telephone: "+5567981082158",
  email: "contato@bluevisausa.com",
  priceRange: "R$697 - R$2.990",
  areaServed: { "@type": "Country", name: "Brasil" },
  makesOffer: [
    {
      "@type": "Offer",
      name: "Blue Start",
      description:
        "Análise do perfil, checklist personalizado, preenchimento do DS-160, guia de pagamento, agendamento da entrevista e suporte via WhatsApp.",
      price: "697",
      priceCurrency: "BRL",
    },
    {
      "@type": "Offer",
      name: "Blue Premium",
      description:
        "Tudo do Blue Start, mais revisão documental, simulação da entrevista, reunião por vídeo e suporte prioritário.",
      price: "1197",
      priceCurrency: "BRL",
    },
    {
      "@type": "Offer",
      name: "Blue Family",
      description:
        "Atendimento para famílias com organização completa da documentação, agendamento conjunto e preparação personalizada.",
      price: "2490",
      priceCurrency: "BRL",
    },
    {
      "@type": "Offer",
      name: "Blue VIP",
      description:
        "Consultor exclusivo, atendimento prioritário, acompanhamento integral e reuniões ilimitadas durante o processo.",
      price: "2990",
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
