# CarManagerUI

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Or pull docker image from dokerhub.
You can run it by using command: `docker run -v ${PWD}/app -p 4201:4200 --rm carmanagerui:dev`

## Usage

This Angular App would allow you to add/search/update/delete car in car list, it communicates to the backend via API.

## API URL

CarManagerUI would auto connect local API backend via `https://localhost:5001/api`. This address can be configured at `\src\environment\environment.ts`.
