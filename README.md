## Requirements:
- Download and install: [VS Code](https://code.visualstudio.com/), Node.js, Git
- Clone this repository
- open the terminal and run `npm` so that cypress and the dependencies are installed

## Running the tests
To run the tests, you can go to the package.json file and execute the one of the following scripts (to open cypress or run all the tests):
```shell
    "cy:open": "cypress open",
    "cy:run:login": "cypress run"
```

## About the repo
This is a very simple repo with one test in cypress/e2e/login-spec.cy.js . As the username and password of practicetestautomation are public, I have added them in the cypress configuration file. Normally I would have added them in a cypress.env.json file that is in the .gitignore
