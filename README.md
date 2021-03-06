
# Summary
In this tutorial, I:
- Built a full stack application using React and Express
- Shared code between the frontend and the backend
- Created a UI library
- Used Nx dep graph capabilities to only retest and rebuild what is affected

<p align="center"><img src="running-app.png"></p>

# Myorg

This project was generated using [Nx](https://nx.dev).

<p align="center"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="450"></p>

🔎 **Nx is a set of Extensible Dev Tools for Monorepos.**

## Adding capabilities to your workspace

Nx supports many plugins which add capabilities for developing different types of applications and different tools.

These capabilities include generating applications, libraries, etc as well as the devtools to test, and build projects as well.

Below are our core plugins:

- [React](https://reactjs.org)
  - `npm install --save-dev @nrwl/react`
- Web (no framework frontends)
  - `npm install --save-dev @nrwl/web`
- [Angular](https://angular.io)
  - `npm install --save-dev @nrwl/angular`
- [Nest](https://nestjs.com)
  - `npm install --save-dev @nrwl/nest`
- [Express](https://expressjs.com)
  - `npm install --save-dev @nrwl/express`
- [Node](https://nodejs.org)
  - `npm install --save-dev @nrwl/node`

There are also many [community plugins](https://nx.dev/nx-community) you could add.

## Generate an application

Run `nx g @nrwl/react:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `nx g @nrwl/react:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are shareable across libraries and applications. They can be imported from `@myorg/mylib`.

## Development server

Run `nx serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `nx g @nrwl/react:component my-component --project=my-app` to generate a new component.

## Build

Run `nx build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `nx test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.



## ☁ Nx Cloud

### Computation Memoization in the Cloud

<p align="center"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-cloud-card.png"></p>

Nx Cloud pairs with Nx in order to enable you to build and test code more rapidly, by up to 10 times. Even teams that are new to Nx can connect to Nx Cloud and start saving time instantly.

Teams using Nx gain the advantage of building full-stack applications with their preferred framework alongside Nx’s advanced code generation and project dependency graph, plus a unified experience for both frontend and backend developers.

Visit [Nx Cloud](https://nx.app/) to learn more.


# My Notes
#### Create a New Workspace  
`npx create-nx-workspace@latest`  

#### Install the NX CLI globally by running:  
`npm install -g nx`  

#### Run app  
`nx serve todos`  

#### Run e2e tests  
`nx e2e todos-e2e --watch`  

#### Install Express  
`npm install --save-dev @nrwl/express`  

#### Create Express app  
`nx g @nrwl/express:app api --frontendProject=todos`  

#### Create a Shared Lib workspace  
`nx g @nrwl/workspace:lib data`  

#### Create Shared UI Lib with many components  
Lib: `nx g @nrwl/react:lib ui`  
Component: `nx g @nrwl/react:component todos --project=ui --export`  

#### Dep Graph  
An Nx workspace can contain dozens or hundreds of applications and libraries. As a codebase grows, it can be difficult to understand how they depend on each other and the implications of making a particular change.  
`nx dep-graph`  

`Dep graph started at http://127.0.0.1:4211`  

#### Building Multiple Projects  
`nx run-many --target=build --projects=todos,api`  

#### Run projects with Dependencies  
As we saw already, Nx is smart, so it knows how applications and libraries in the workspace depend on each other.

Run `nx lint todos --with-deps`, and you see that Nx lints both the todos app and the libraries it depends on.  

#### Test Affected Projects  
Printing the affected projects  
`nx affected:apps` and `nx affected:lib`  
Test everything that has been affected.  
`nx affected:test`  

You can run any target against the affected projects in the graph like this:  
`nx affected --target=build`  
`nx affected:build`