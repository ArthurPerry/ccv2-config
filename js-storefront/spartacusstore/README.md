# Spartacusstore

[Prerequisites](https://sap.github.io/spartacus-docs/building-the-spartacus-storefront-from-libraries-4-x/#prerequisites) for node, ng, yarn (depending on Spartacus verion)

[Import Spartacus OCC Credentials](https://sap.github.io/spartacus-docs/installing-sap-commerce-cloud-2105/#step-3-import-occ-credentials)

[Import Product Recommendation CMS config](../../core-customize/hybris/bin/custom/productrecommendation/resources/productrecommendation/import/sampledata/contentCatalogs/electronics-spaContentCatalog/) (2 files)

```
cms-responsive-content.impex
cms-responsive-content_en.impex
```

To run:

```
yarn
yarn build
yarn start
```

## Background

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
