# LM Soft — Site institucional

Site one-page da LM Soft. Stack: **React 18**, **TypeScript**, **Vite**, **CSS Modules**.

---

## Requisitos

- Node.js 18+
- npm 9+

---

## Desenvolvimento

```bash
npm install
npm run dev
```

Abre em [http://localhost:5173](http://localhost:5173).

---

## Build para produção

```bash
npm run build
```

A pasta `dist/` contém o site estático pronto para deploy. Pode ser publicada em qualquer hospedagem estática (Vercel, Netlify, GitHub Pages, S3, etc.).

**Preview do build:**

```bash
npm run preview
```

---

## Estrutura do projeto

| Pasta / arquivo        | Uso |
|------------------------|-----|
| `src/content/siteCopy.ts` | **Textos e URLs de imagens** — edite aqui para alterar conteúdo |
| `src/components/`      | Componentes React (Hero, Section, listas, Footer, etc.) |
| `src/index.css`       | Design tokens (cores, tipografia, espaçamento) e estilos globais |
| `public/`             | Arquivos estáticos (favicon, imagens) |
| `index.html`          | HTML base e meta tags (SEO, Open Graph) |

---

## Como alterar conteúdo

1. **Textos:** edite `src/content/siteCopy.ts`. Todas as frases, títulos e listas estão lá.
2. **Imagens:**  
   - Para usar suas próprias fotos: coloque em `public/images/` e no `siteCopy.ts` use `"/images/nome-do-arquivo.jpg"`.  
   - As URLs atuais são placeholders (Unsplash). Troque por caminhos locais ou suas URLs quando tiver as imagens finais.
3. **Meta (título, descrição, rede social):**  
   - Título e descrição também em `siteCopy.ts` (meta).  
   - Open Graph e canonical estão em `index.html`; ajuste `canonical` e `og:image` quando tiver o domínio e a imagem de compartilhamento definitivos.

---

## Scripts

| Comando        | Descrição |
|----------------|-----------|
| `npm run dev`  | Servidor de desenvolvimento |
| `npm run build`| Build de produção → `dist/` |
| `npm run preview` | Servidor local para testar o build |
| `npm run lint` | ESLint |

---

## Deploy

1. Rode `npm run build`.
2. Envie o conteúdo da pasta `dist/` para o servidor ou conecte o repositório a um serviço (ex.: Vercel/Netlify) apontando o build para `npm run build` e a pasta de saída para `dist`.
3. Configure o domínio (ex.: `lmsoft.com.br`) nas configurações da hospedagem.
4. Em `index.html`, atualize `rel="canonical"` e `og:image` para a URL final do site e da imagem de compartilhamento.

---

© LM Soft — Lamim & Martins LTDA.
