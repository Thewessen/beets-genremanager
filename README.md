# NPM packages and explenation

An introduction to several packages used for deploying this app. It's not
necessary to list all the packages here, nor reading through all of it before
deploying the app. Just a convenience, and reminder for myself.

## Dependencies

### React

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

`npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

`npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

`npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

`npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Development dependencies

### standard

[standardjs](https://standardjs.com/): JavaScript style guide, linter and formater.

Usage: Once installed, run `standard` in the folder containing .js files.
This is automatically done when running `npm test` in the root folder.

Use `standard --fix` to autofix errors/warnings found.

__The rules__

- 2 spaces – for indentation
- Single quotes for strings – except to avoid escaping
- No unused variables – this one catches tons of bugs!
- No semicolons – _It's fine. Really!_
- Space after keywords `if (condition) { ... }`
- Space after function name `function name (arg) { ... }`
- Always use `===` instead of `==` – but `obj == null` is allowed to check `null || undefined`.
- Always handle the node.js err function parameter
- Declare browser globals with `/* global */` comment at top of file
    - Prevents accidental use of vaguely-named browser globals like open, length, event, and name.
    - Example: `/* global alert prompt */`
    - Exceptions are: `window`, `document`, and `navigator`
Checkout [Rules](https://github.com/standard/standard/blob/master/RULES.md#javascript-standard-style) for more details and examples.
