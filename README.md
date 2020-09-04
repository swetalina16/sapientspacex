# React Hello World!

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### API used

API has been used for initial load :
`https://api.spacexdata.com/v3/launches?limit=100`

API used for successful launch of the rocket :
https://api.spacexdata.com/v3/launches?launch_success=true

API used for unsuccessful launch of the rocket :
https://api.spacexdata.com/v3/launches?launch_success=false

API used for successful landing of the rocket :
https://api.spacexdata.com/v3/launches?land_success=true

API used for unsuccessful landing of the rocket :
https://api.spacexdata.com/v3/launches?land_success=false

### Steps to run

Install packages : npm i
Start command : npm start