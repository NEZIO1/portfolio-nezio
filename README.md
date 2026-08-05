# Portfólio — Guilherme Augusto Nézio

Portfólio pessoal ([nezio.dev](https://nezio.dev)) de Guilherme Augusto Nézio, estudante de Análise e Desenvolvimento de Sistemas pela FIAP, voltado a oportunidades de estágio, trainee e vagas júnior em Full Stack, Java e Power BI.

## Stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack)
- TypeScript
- Tailwind CSS v4
- [shadcn/ui](https://ui.shadcn.com) (preset Vega, base Radix)
- [motion](https://motion.dev) para animações de entrada
- `next-themes` para o tema dark/light

## Rodando localmente

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

Outros scripts:

```bash
npm run build         # build de produção
npm run lint           # ESLint
npm run format          # Prettier (grava)
npm run format:check   # Prettier (só verifica)
```

## Estrutura

O site é uma página única com scroll (`/`), com as seções montadas em `src/app/page.tsx`. Todo o conteúdo textual é data-driven, vindo de `src/content/*.ts` (tipado em `src/content/types.ts`) — nenhuma seção tem texto hardcoded no JSX. `CONTEUDO-ORIGINAL.md`, na raiz, é a fonte de verdade desse conteúdo.

```
src/
├── app/            # layout, page, sitemap, robots
├── components/
│   ├── layout/     # navbar, mobile nav, footer, theme toggle
│   ├── sections/   # hero, about, journey, projects, skills, certificates, contact
│   ├── shared/     # reveal, section-container, section-heading, skip-to-content
│   ├── providers/  # theme-provider
│   └── ui/         # componentes gerados pelo shadcn/ui
├── content/        # dados tipados de cada seção
├── hooks/          # use-scroll-spy
└── lib/            # utils, metadata, structured-data
```

## Pendências

Alguns campos ficam opcionais em `content/*.ts` até os arquivos correspondentes existirem (placeholder visual até lá):

- Imagens dos 6 projetos (`public/img/projects/`)
- Currículo em PDF (`public/cv/`)
- Arquivos dos certificados

## Deploy

Ainda não publicado. A forma mais simples é a [Vercel](https://vercel.com/new).
