# BlueVisa

Site institucional da **BlueVisa** — assessoria 100% online para vistos americanos.

> Seu sonho americano começa aqui.

## Stack

- [Next.js 15](https://nextjs.org/) (App Router) + React 19 + TypeScript
- [Tailwind CSS](https://tailwindcss.com/) com a paleta da marca (azul-marinho `#0A2342`, azul-claro `#2D9CDB`, branco)
- [Framer Motion](https://www.framer.com/motion/) para animações
- Fontes: Poppins (títulos) e Montserrat (texto)

## Rodando localmente

```bash
npm install
npm run dev
```

O site sobe em `http://localhost:3000`.

## Estrutura

- `app/` — layout, página única (landing), SEO (metadata, sitemap, robots, JSON-LD)
- `components/` — seções da landing page (Hero, Método, Planos, FAQ etc.)
- `lib/site.ts` — conteúdo central: URL do site, número de WhatsApp, planos, FAQs e depoimentos

Para alterar textos, preços ou o número de WhatsApp, edite `lib/site.ts`.

## Aviso legal

A BlueVisa é uma empresa privada de assessoria e orientação administrativa.
Não possui vínculo com o governo dos Estados Unidos e não garante a aprovação
do visto — a decisão é exclusiva das autoridades consulares americanas.
