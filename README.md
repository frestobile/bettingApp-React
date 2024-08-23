# Getting Started

1. Create React App

   ```
   npx create-react-app my-app --template typescript
   ```

   or

   ```
   yarn create react-app my-app --template typescript
   ```

   [More Details](https://create-react-app.dev/docs/adding-typescript)

2. Setup ESLINT and PRETTIER
   - Install `eslint`
     ```
     npm install eslint --save-dev
     ```
     or
     ```
     yarn add eslint --dev
     ```
   - Create `.eslintrc.json` by running
     ```
     npx eslint --init
     ```
     or
     ```
     yarn run eslint --init
     ```
   - Add a rule to `.eslintrc` file.
     ```
     "rules": {
         "react/react-in-jsx-scope": "off"
     }
     ```
   - If you are using jest then you will find that eslint is giving us an error that test or expect is not defined . To fix this we need to add "jest": true inside env.
     ```
       "env": {
         "browser": true,
         "es2021": true,
         "jest": true
       }
     ```
   - Add esling plugins
     ```
     npm install eslint-config-prettier eslint-plugin-prettier prettier --save-dev
     ```
     or
     ```
     yarn add eslint-config-prettier eslint-plugin-prettier prettier --dev
     ```
   - After installing above, make changes to `.eslintrc` file.
     ```
     "extends": ["eslint:recommended", "plugin:react/recommended", "plugin:prettier/recommended"]
     ```
   - Create .prettierrc and paste the below code
     ```
      {
        "semi": true,
        "tabWidth": 2,
        "printWidth": 100,
        "singleQuote": true,
        "trailingComma": "none",
        "jsxBracketSameLine": true
      }
     ```
   - Now, eslint and prettier is setup lets add the script to the package.json
     ```
     "lint": "eslint .",
     "lint:fix": "eslint --fix",
     "format": "prettier --write './**/*.{js,jsx,ts,tsx,css,md,json}' --config ./.prettierrc"
     ```
     [More Details](https://dev.to/knowankit/setup-eslint-and-prettier-in-react-app-357b)

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
