# Guia do projeto B.Right

Site institucional da B.Right (Bright Brazil): React 18, Vite, TypeScript e Tailwind CSS. A home em português fica em `/`; a versão em inglês fica em `/global`.

## Estrutura

```
index.html              SEO do documento (SPA, sem Helmet)
public/                 favicon.ico, robots.txt
src/main.tsx            entrada
src/App.tsx             rotas, QueryClient, toasts
src/pages/              telas de rota (Index, Blog, Global, NotFound)
src/components/         seções da home (HeroSection, AboutSection, …)
src/components/global/  seções da versão em inglês
src/components/ui/      primitivos shadcn/ui — não bifurcar
src/data/               conteúdo estático tipado (blogPosts, globalBlogPosts)
src/hooks/              hooks compartilhados
src/lib/utils.ts        cn()
src/assets/             imagens importadas como módulo
src/integrations/supabase/  cliente gerado — não editar
supabase/functions/     edge functions (meeting-request, newsletter-signup)
```

Novas rotas entram em `src/App.tsx`, acima do catch-all `*`. Uma página compõe seções; cada seção é um componente com export default. A versão em inglês espelha a home em `pages/Global.tsx` e `components/global/`.

Importe código e imagens com o alias `@/` (`@/components/...`, `@/assets/...`). Arquivos em `src/` não são URLs públicas; estáticos servidos na raiz ficam em `public/`.

## TypeScript

- Componentes funcionais. Páginas e seções usam `export default`.
- Tipos de conteúdo ficam junto do dado, como `BRBlogPost` em `src/data/blogPosts.ts`.
- O alias `@/*` aponta para `src/*` (`tsconfig` e `vite.config.ts`).
- JSX é `react-jsx`. O `strict` do `tsconfig.app.json` está desligado (`strict`, `strictNullChecks` e `noImplicitAny` são `false`). Não assuma checagem estrita de `null`.
- `npm run lint` usa typescript-eslint recomendado e as regras de `react-hooks`. `@typescript-eslint/no-unused-vars` está desligado.

## Tailwind CSS

Estilo só com classes utilitárias. Não crie CSS modules. Tokens semânticos estão em `src/index.css` e são mapeados em `tailwind.config.ts`.

- Cores: `bg-background`, `text-foreground`, `bg-primary`, `bg-accent`, `text-muted-foreground`. Não hardcode o hex da marca nos componentes.
- Paleta: teal `#136363` (primary), navy `#14192D` (foreground), creme `#E6E5C7` (background), lima `#C8E54A` (accent).
- Fontes: `font-display` (Bricolage Grotesque) nos títulos; `font-body` (Manrope) é o padrão do `body`.
- Layout recorrente: `max-w-7xl mx-auto`, `px-6`, breakpoints `md:` e `lg:`.
- CTAs em pílula: `rounded-full`, fundo `bg-accent`, texto `text-accent-foreground`.
- Classes condicionais passam por `cn()` de `@/lib/utils` (`clsx` + `tailwind-merge`).
- Variantes de botão e afins usam `class-variance-authority`, como em `src/components/ui/button.tsx`.
- Movimento de seção: `framer-motion`. Animações de utilitário (`accordion`, `marquee`, `fade-up`) ficam no `tailwind.config.ts` com `tailwindcss-animate`.
- Ícones: `lucide-react`.

## Boas práticas

- Texto da home em português; texto de `/global` em inglês.
- Formulários de contato e newsletter chamam `supabase.functions.invoke` com o cliente de `@/integrations/supabase/client`. Variáveis: `VITE_SUPABASE_URL` e `VITE_SUPABASE_PUBLISHABLE_KEY`. Não commitar segredos.
- Não editar `src/integrations/supabase/client.ts` nem `types.ts`; são gerados.
- Estado remoto: TanStack Query, já provido em `App.tsx`. Feedback: `<Toaster />` e Sonner.
- Primitivos de UI vêm de `@/components/ui`. Estenda por composição ou variante, em vez de copiar o componente.
- SEO (title, description, canonical, Open Graph, Twitter e JSON-LD) vive no `index.html`, porque não há react-helmet. O `lang` é `pt-BR` e a URL canônica da home é `https://brightbrazil.co/`.
- Favicon público: `/favicon.ico`.
- Comandos: `npm run dev` (porta 8080), `npm run lint`, `npm run test`, `npm run build`.
