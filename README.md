# The Tap Room

## Description
### _This is a react app that allows a user to create new kegs of beer and pour per pint. The user should also be able to see how much beer is left in the keg after their pour._

## User Stories:
* _A user can see the list of available kegs, along with its properties (name, brand, price, abv)._
* _A user can submit a form to add a new keg to the list._
* _A user can click on an existing keg to see its detail page._
* _A user can see how many pints are left in the keg after a pour._
* _As a user, I want to be able to click a button next to a keg whenever I sell a pint of it. This should decrease the number of pints left by 1. Pints should not be able to go below 0._


## Installation Instructions

1. Visit this link https://github.com/assassin56/react_week2_TapRoom
 
2. Clone this repo by selecting the "clone or download" button. This will allow you to copy the repo's link.

3. While on the command line in your terminal, enter "git clone" followed by the copied url.

4. Enter "ls" to show a list of files and documents. One of them will be labeled "react_week2_TapRoom. Use "cd" followed by the project directory name to navigate there.

5. While in project directory, run the command "npm install"

6. While in project directory, run the command "npm run build"

7. While in project directory, run the command "npm start"

8. Type in your browser the url "localhost:3000" to access the page, or the page should load upon running the previous command.

## Known Bugs
* _The .map method in KegList.js is currently reading undefined properties, causing rendering errors._

## Technologies Used

* Node.js
* Webpack
* npm
* Javascript
* jQuery
* React

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Diagrams
![App Layout](./diags/diag.drawio.svg)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment


This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
