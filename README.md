
# Automation In Cypress

This is an Automation Testing project built using Cypress. It consists of two projects in different branches:
### 1. Main Branch

    Focus: API Automation for DemoBlaze.

    Design Pattern: Page Object Model (POM).

    ### Main Folders:

    tests: Contains API test scripts.

    helpers: Utility functions for reusable logic, such as API requests.

    data: Test data for the API requests.

### 2. e2e_project Branch

    Focus: End-to-End (E2E) Automation for DemoBlaze.

    Design Pattern: Page Object Model (POM).

    Main Folders:

        tests: E2E test cases.

        pages: Page Object classes for different web pages.

        locators: Locators for web elements used in the POM classes.

        data: Test data for the E2E scenarios.




## Installation

To set up the project locally, follow these steps:

Prerequisites

    Install Node.js (LTS version recommended).

    Install Git.

Steps

Clone the repository:

    git clone <repository_url>
    cd <repository_folder>

Install dependencies:

    npm install

This will install Cypress and other required dependencies listed in package.json.
    
## Running Tests

To run tests, run the following commands

### API Automation (Main Branch)

Ensure you are on the main branch:

     git checkout main

Open Cypress Test Runner:

    npx cypress open

Select the API test files from the Test Runner and execute them.

E2E Automation (e2e_project Branch)

Switch to the e2e_project branch:

    git checkout e2e_project

Open Cypress Test Runner:

    npx cypress open

Select the E2E test files from the Test Runner and execute them.

## Project Overview

Main Branch

    tests/: Contains test scripts for API endpoints, including signup and login functionalities.

    helpers/: Utility functions for reusable code, such as request handlers for APIs.

    data/: Contains test data files (e.g., usernames, passwords, and API configurations).

e2e_project Branch

    tests/: Contains E2E test cases for adding products to the cart, completing purchases, etc.

    pages/: Implements the Page Object Model with classes for each web page (e.g., MainPage, CartPage, ProductDetailsPage).

    locators/: Stores locators for web elements used in the POM classes.

    data/: Contains test data files (e.g., product names, user credentials).




## Dependencies

### Key Dependencies

Cypress: A testing framework for E2E and API automation.

Node.js: Required to run Cypress.

### Other Dependencies:

Any additional packages specified in the package.json file (e.g., plugins, utilities).

Installing Dependencies

Run the following command to install all dependencies:

    npm install


## Features

### API Automation

  Test Cases:

    Create a new user.

    Attempt to create an existing user.

    Log in with valid credentials.

    Log in with invalid credentials.

### E2E Automation

  Test Scenarios:

    Add products to the cart.

    Visualize the cart.

    Complete the purchase flow.


## Contributing

1. Fork the repository.

    Create a new feature branch:

         git checkout -b feature/new-feature

2. Commit your changes and push to your forked repository.

3. Submit a pull request for review.



