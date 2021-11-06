# FlowrSpot

### Requirements

-   [Node.js](https://nodejs.org/) v14 or newer.

### Installation

-   Install project dependencies — `npm install`.
-   Create `.env` file - `cp .env.example .env`.
-   Launch the app — `npm run dev`, it will become available at [http://localhost:8080](http://localhost:8080/).

### Features

-   TypeScript Included.
-   Vue Router Included.
-   Vuex.
-   Modules/Components organized across folders.
-   Basic tests included.

### Directory Structure

| Name               | Description                                          |
| ------------------ | ---------------------------------------------------- |
| **build/**         | Compiled source files will be placed here.           |
| **public/**        | Static assets (fonts, css, js, img).                 |
| **src/**           | Source files.                                        |
| **src/components** | Vue components including shared (common) components. |
| **src/layouts**    | Dynamic Layout Components.                           |
| **src/views**      | Views - screen components.                           |
| **src/routes**     | Application routes.                                  |
| **src/store**      | Vuex state management.                               |

### Available Scripts

-   `dev`
-   `build`
-   `test:unit`
-   `code:format`
-   `code:check`
