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
    "Seu visto americano, sem complicação. Assessoria 100% online para todos os tipos de visto: turismo (B1/B2), estudante (F1), intercâmbio (J1), trabalho, noivo(a) (K1) e investidor. Do DS-160 à preparação para a entrevista.",
  keywords: [
    "assessoria visto americano",
    "como tirar visto americano",
    "preenchimento DS-160",
    "agendamento entrevista visto americano",
    "visto de turismo EUA",
    "visto B1 B2",
    "renovação de visto americano",
    "visto americano para família",
    "visto de estudante F1",
    "visto de intercâmbio J1",
    "visto de trabalho EUA",
    "visto de noivo K1",
    "visto de investidor E2",
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
      "Seu sonho americano começa aqui. Cuidamos da burocracia de todos os tipos de visto americano para você focar na viagem.",
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "BlueVisa | Assessoria para Visto Americano",
    description: "Seu visto americano, sem complicação. Assessoria 100% online.",
    images: ["/og.png"],
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export const viewport = {
  themeColor: "#061529",
};

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": SITE_URL + "/",
  name: "BlueVisa",
  alternateName: "BlueVisa Assessoria de Vistos Americanos",
  slogan: "Seu sonho americano começa aqui.",
  description:
    "Assessoria particular e independente para todos os tipos de visto americano: turismo e negócios (B1/B2), renovação, estudante (F1/M1), intercâmbio (J1), trabalho (H, L, O, P), noivo(a) (K1), investidor (E1/E2) e imigração (EB-1 e EB-2 NIW). Orientação administrativa, sem vínculo com o governo dos EUA e sem garantia de aprovação.",
  url: SITE_URL + "/",
  logo: SITE_URL + "/logo.png",
  image: SITE_URL + "/og.png",
  telephone: "+5567981082158",
  email: "contato@bluevisausa.com",
  areaServed: { "@type": "Country", name: "Brasil" },
  makesOffer: [
    {
      "@type": "Offer",
      name: "Blue Start",
      description:
        "Análise do perfil, checklist personalizado, preenchimento de formulários, guia de pagamento, agendamento da entrevista e suporte via WhatsApp.",
    },
    {
      "@type": "Offer",
      name: "Blue Premium",
      description:
        "Tudo do Blue Start, mais revisão documental, simulação da entrevista, reunião por vídeo e suporte prioritário.",
    },
    {
      "@type": "Offer",
      name: "Blue Family",
      description:
        "Atendimento para famílias com organização completa da documentação, agendamento conjunto e preparação personalizada.",
    },
    {
      "@type": "Offer",
      name: "Blue VIP",
      description:
        "Consultor exclusivo, atendimento prioritário, acompanhamento integral e reuniões ilimitadas durante o processo.",
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
