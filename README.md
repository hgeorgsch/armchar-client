# ArmcharClient

This client is made to work with the
[armchar server](https://github.com/hgeorgsch/armchar).

## Quick Start

A fairly old version of angular and primeng is used. 
It may be necessary to force installation, i.e. use

```sh
npm i --force
```

When the 
[armchar server](https://github.com/hgeorgsch/armchar).
is running on localhost port 8080, as well as the client server
on port 4200 (as with the angular development server),
you can try, for instance,

```
http://localhost:4200/character?char=cieran&year=1222&season=Summer
```

This loads the sample character, Cieran the Fletcher.

The pages to select character have not been implemented.

# Development notes - inherited from Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
