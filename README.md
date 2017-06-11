# typescript-mocha-nyc-template

## What it is

This is a template for creating node.js projects running with TypeScript + Mocha (testing framework) + Nyc (coverage tests) + ES-Lint.

## How to use it

You can fork this project directly from [https://github.com/davidrissato/typescript-mocha-nyc-template] as a starting point to your own project, and start changing the following files and folders:

* **packages.json**
    * change lines 2 - 11 to put your own package name and personal information
* **src/main/ts/**
    * put your TypeScript code files under this structure. They will be transpiled to directory `lib/js` later (see `npm run build`)
* **src/test/ts/**
    * Your TypeScript tests files go under this structure. Mocha is already configured to run tests coded in typescript.
* **README.md**
    * fill it out with your program information

## npm commands available

This package brings some npm commands that may be useful during your development:

* **npm run build**
    * transpile `src/main/ts/**/*.ts` files into `lib/js` folder
* **npm start**
    * runs the transpiled version
* **npm test**
    * runs es-lint + mocha (tests) + nyc for coverage tests 
* **npm run lint**
    * runs es-lint alone
* **npm run watch-test**
    * keep watching for changes in `src` folder and re-run npm test 

