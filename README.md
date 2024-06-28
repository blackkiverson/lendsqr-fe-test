# LENDSQR FRONTEND ENGINEERING ASSESSMENT

## About Lendsqr

Lendsqr is a Lending-as-a-Service (LaaS) solution that enables lenders to build, launch, and scale their digital lending business across multiple channels at the lowest cost. We provide lenders from various industries with a cloud lending platform to ensure the smooth operation of their LaaS business by implementing innovative solutions and superior domain expertise. We are passionate about making lenders succeed.

## Requirements

For development, you will need Node.js installed on your environment.

### Node

[Node.js](http://nodejs.org/) is easy to install and now includes [NPM](https://npmjs.org/).

## Install

First, clone the repository:

```sh
$ git clone https://github.com/blackkiverson/lendsqr-fe-test
$ cd lendsqr-fe-test
```
Next, install the dependencies:

```sh
$ npm start
```
## Start & Watch

To start the project in development mode:

```sh
$ npm start
```
## Simple build for production

To create a production build:

```sh
$ npm run build
```
## Run tests

To run the unit tests:

```sh
$ npm test
```

## Project Structure

The project structure follows a modular approach, ensuring scalability and maintainability.

```arduino
├── public
│   ├── image
│   └── icons
├── src
│   ├── components
│   │   └── users
│   │       ├── DetailHeader.tsx
│   │       ├── DetailMain.tsx
│   │       ├── Loader.tsx
│   │       ├── MoreOptions.tsx
│   │       └── ...
│   ├── styles
│   │   ├── UserDetailsPage.scss
│   │   └── ...
│   ├── utils
│   │   └── models.ts
│   ├── App.tsx
│   ├── index.tsx
│   └── ...
```

## Languages & Tools

### React

This project uses React, a JavaScript library for building user interfaces.

### Typescript

TypeScript is used for type-checking and ensuring code quality.

### SCSS

SCSS is used for styling the components with a powerful and flexible syntax.

### Jest

Jest is used for unit testing the components, ensuring the robustness and reliability of the application.

## Development Guidelines

### Code Style

This project follows the Airbnb JavaScript style guide. Please ensure your code complies with the guidelines before committing.

### Commits

Commits should be concise and descriptive. Follow the conventional commit messages format:

```vbnet
feat: Description of a new feature
fix: Description of a bug fix
docs: Description of documentation changes
style: Description of style changes (formatting, missing semi-colons, etc.)
refactor: Description of a code refactoring
test: Description of added tests
chore: Description of maintenance tasks
```

### Branching

Follow the GitFlow branching model:

```txt
main for stable releases.
develop for development.
feature/* for new features.
bugfix/* for bug fixes.
```

## Contribution

Contributions are welcome! Please follow these steps to contribute:

```txt
Fork the repository.
Create a new branch (git checkout -b feature/my-feature).
Make your changes.
Commit your changes (git commit -m 'feat: Add some feature').
Push to the branch (git push origin feature/my-feature).
Open a Pull Request.
```

## License
This project is not licensed, test purposes only.

## Contact

For any questions or support, please contact us at blackkiverson@gmail.com.

```javascript
This `README.md` file includes sections for installation, development, build, testing, project structure, development guidelines, and contribution, providing a comprehensive guide for anyone working with the project.
```