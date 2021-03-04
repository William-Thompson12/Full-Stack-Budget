# Budget Tool
## Full Stack Project - Digitial Crafts - <a href="https://github.com/DigitalCraftsStudents/hyb-fl-08-2020-cohort/blob/main/lectures/week-21/README.md">Requirements</a>
## <a href="https://github.com/William-Thompson12/Full-Stack-API">API</a>
## Status: In Progress
https://budget-tool-dc.netlify.app

**Welcome to Budget Tool your personal budgeting tool**

**Making the Project:**

1. The Component Lifecycle:
By far the most important concept on this list is understanding the component lifecycle. The lifecycle methods allow us to run code at specific points in the component’s life or in response to changes in the component’s life.
2. React Context
This brings us now to React context which is just global state for components. React context allows you to create global context objects that can be given to any component you make. 

**Repository Contents**

Img - Images

Redux: 
actions.js - Calls state functions
reducers.js - Controls state
store.js - initial state

Services: - Controlls HTTP calls to the server/ One for each table
budgets.services.js 
transactions.services.js
users.services.js

Views: - Pages
home.css
home.js - Home/Index
mainhub.css
mainhub.js - Login Redirect
signup.css
signup.js - Signup Page


Components:
auth - Contains Login and Sign up Form 
budget-components - Holds an Action container containg all of the budget functions and components
canvasjs-3.2.9 - JS Charts
footer-components - Footer
header-components - Header
articleContainer.js - Homepage Visuals 
profileContainer.js - Profile functions and container

**Features**

  "CanvasJSChart"
  "axios": "^0.21.1"
  "dotenv": "^8.2.0"
  "express": "^4.17.1"
  "firebase": "^8.2.7"
  "js-cookie": "^2.2.1"
  "pg": "^8.5.1"
  "react": "^17.0.1"
  "react-beautiful-dnd": "^13.0.0"
  "react-bootstrap": "^1.4.3"
  "react-dom": "^17.0.1"
  "react-redux": "^7.2.2"
  "react-router": "^5.2.0"
  "react-router-dom": "^5.2.0"
  "redux": "^4.0.5"
  "redux-thunk": "^2.3.0"

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
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

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
