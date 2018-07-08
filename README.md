# OpenPlatform - React Project integrated into [Discord](https://discordapp.com)'s API

This project was bootstrapped with [Create React App][1] (because I'm lazy), and makes use of a modified version of the [discord.js][2] API.

## Running the platform
To run the source of the platform, you can use yarn:
```cmd
$ yarn start
```
Or if you prefer, you can use NPM. The syntax is identical:
```cmd
$ npm start
```

## Adding dependancies
Dependancies can be added as normal, and then imported within the code of the platform.

```cmd
$ yarn add <module>
$ npm i --save <module>
```
```js
import Module from 'module'

Module.doSomething();
```

## Building the platform
The platform can be built by running either of the following commands:
```cmd
$ yarn run build
$ npm run build
```
This will output a static web app into the `build` directory, which can then be run using a module such as [serve][3].

## DISCLAIMER
All of the code, excluding the modules that this project makes use of, was written by me, and was not copied from anywhere.



[1]: https://github.com/facebookincubator/create-react-app "Create React App"
[2]: https://discord.js.org "discord.js"
[3]: https://github.com/zeit/serve#readme "serve"