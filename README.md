# VyroBP

Website institucional da VyroBP, criado com React e Vite.

## Desenvolvimento local

```bash
npm install
npm run dev
```

## Publicação

```bash
npm run build
```

Os ficheiros prontos para publicação ficam na pasta `dist/`. No Vercel, importe
o projeto e use `npm run build` como comando de build e `dist` como pasta de
saída. O ficheiro `vercel.json` mantém as rotas da aplicação a funcionar. Para
Netlify, a regra em `public/_redirects` trata também as rotas da aplicação.
