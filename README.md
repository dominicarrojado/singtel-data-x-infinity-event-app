# Singtel Data X Infinity Event App

![CI/CD](https://github.com/dominicarrojado/singtel-data-x-infinity-event-app/workflows/CI/CD/badge.svg)

A photo contest app for Singtel's Data X Infinity Event built with [Next.js](https://nextjs.org/), [TypeScript](https://www.typescriptlang.org/) and [Tailwind CSS](https://tailwindcss.com/).

## Quick Start

1. Install [Yarn](https://yarnpkg.com/lang/en/docs/install/).
2. Clone the app:

```bash
git clone git@github.com:dominicarrojado/singtel-data-x-infinity-event-app.git
```

3. Install dependencies:

```bash
cd singtel-data-x-infinity-event-app
yarn install
```

4. Run the development server:

```bash
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Running All Tests

```bash
yarn test
```

## Running Tests (Watch)

```bash
yarn test:watch
```

## Build For Production (Static)

1. Build and generate static files:

```bash
yarn build
yarn export
```

2. The `out` directory can be served by any static hosting service or CDN.

## VSCode Extensions

- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
