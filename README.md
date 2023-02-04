# Dev-News App

## Introduction

This is a dev-news app built with Next.js and other technologies listed in the `package.json` file.

## Getting Started

To get started, follow these steps:

1. Clone the repository
2. Run `npm install` to install the dependencies
3. Run `npm run dev` to start the app in development mode

## Scripts

## Here are the available scripts in the `package.json` file:

"scripts": {
"dev": "next dev",
"build": "next build",
"format:write": "prettier --write "/_.{css,js,json,jsx,ts,tsx}"",
"format": "prettier "/_.{css,js,json,jsx,ts,tsx}"",
"start": "next start",
"prebuild": "prisma generate",
"predev": "prisma generate",
"lint": "next lint"
},

## Deployment

To deploy your app, run the following commands:

`npm run build`
`npm start`

## License

This project is licensed under the MIT License.

## Contact

For any questions or issues, please open an issue in the repository or contact the maintainers directly.
