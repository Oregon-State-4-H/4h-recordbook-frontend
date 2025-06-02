# 4H Recordbook Frontend

## Neccesary Files Not in Repo

A ".env" file will be needed in the outermost directory of this repo, with the following variables:

AUTH0_SECRET=
APP_BASE_URL=
AUTH0_DOMAIN=
AUTH0_ISSUER_BASE_URL=
AUTH0_CLIENT_ID=
AUTH0_CLIENT_SECRET=
AUTH0_AUDIENCE=

To request the values of these necessary variables, please email:
4Hrecord.books@oregonstate.edu

## Commands to Run Dev Instance:

npm install
npm run dev

## Commands to Generate Production Build of App:

npm install
npm run build

## Tooling

The framework used is the NextJS App router. Below please find a resource to learn more:
https://nextjs.org/docs/app

Most components used are imported from Google's MUI component library. Below please find a resource to learn more:
https://mui.com/material-ui/all-components/

Components relating to PDF generation, display, and download are from React-PDF. Below please find a resource to learn more:
https://react-pdf.org/

## Codebase Organizaton by Directory

### public dir

This directory contains assets such as images.

### src dir

This directory contains the majority of the frontend codebase, organized into the following subdirectories:

#### API

This subdirectory contains :

- exports for type definitions needed to interface with backend endpoints
- exports for supporting type definitions resused in component and page files
- exports for union and intersection types so that shared components can work with different data types
- exports for typeguard functions so that shared components can access values specific to types within union types
- exports for functions to call backend API endpoints

#### app

This subdirectory contains :

- subdirectories and page.tsx files to define routes and content for each page
- layout.tsx files to provide components common to pages in routes defined by nested subdirectories

#### components

This subdirectory contains :

- in the outer directory, exports for general use components not specific to category types
- in the inner subdirectories, exports for components specific to the categories specified by the subdirectory names

#### context

This subdirectory contains :

- exports for React context providers, which are imported and injected in the outermost layout.tsx file of the app directory

#### lib

This subdirectory contains :

- an export for the integration with Auth0, the identity provider being used for this project
