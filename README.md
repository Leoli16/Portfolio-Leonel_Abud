# Portfolio — Leonel Abud

Sitio estático construido con **React 19 + Vite 8 + Tailwind CSS 4**.

## Requisitos

- Node.js 22.x
- pnpm 10.34.3 (viene declarado en `packageManager`, lo activa Corepack)

## Desarrollo

```powershell
corepack enable
pnpm install --frozen-lockfile
pnpm dev
```

Abrir http://localhost:8443.

Para generar y probar la versión de producción:

```powershell
pnpm build
pnpm preview
```

## Estructura mínima

| Archivo | Para qué sirve |
| --- | --- |
| `index.html` | Shell HTML con el `#root` |
| `src/main.tsx` | Punto de entrada de React |
| `src/App.tsx` | Contenido del sitio |
| `src/index.css` | Tailwind, fuentes y estilos |
| `vite.config.ts` | Plugins, alias `@` y `base` |
| `.figma/make/site.json` | Config del documento (lo importa `vite.config.ts`) |
| `public/assets/` | Imágenes usadas por el sitio |

## Deploy en Vercel

El repositorio está listo para importar en Vercel:

- Framework Preset: **Vite**
- Install Command: `pnpm install --frozen-lockfile`
- Build Command: `pnpm build`
- Output Directory: `dist`

Estos valores también están fijados en `vercel.json`.

No definir la variable de entorno `FIGMA_PUBLIC_URL`: se usa solo dentro de Figma Make y cambiaría la ruta base de los assets.
