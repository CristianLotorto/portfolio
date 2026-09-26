# Portfolio

Portfolio personal construido con React, TypeScript y Vite.

## Desarrollo local

Requisitos: Node.js 22.13 o superior y npm.

```bash
npm ci
npm run dev
```

## Validacion antes de publicar

```bash
npm run lint
npm run build
```

## Deploy en Vercel

1. Sube el proyecto a un repositorio en GitHub, GitLab o Bitbucket.
2. Inicia sesion en [vercel.com](https://vercel.com/) y selecciona **Add New > Project**.
3. Importa el repositorio del portfolio.
4. Deja como directorio raiz la carpeta donde esta `package.json`.
5. Confirma el preset **Vite**. `vercel.json` configura la instalacion con `npm ci`, el build con `npm run build` y la salida `dist`.
6. No hacen falta variables de entorno para este proyecto. Selecciona **Deploy**.

Vercel publicara una URL y generara despliegues de vista previa para los siguientes cambios enviados al repositorio.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
