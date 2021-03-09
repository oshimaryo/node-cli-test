#!/usr/bin/env node

// ref: https://dev.to/akashshyam/a-guide-to-clis-with-node-js-2obn

// install this   npm package
// npm i -g .

const prompts = require('prompts'); // add prompts
const chalk = require('chalk'); // console.log with color
const CFonts = require('cfonts'); // funny text decoration

const yargs = require('yargs/yargs'); // basic arguments like `-n` or `--name`
const { hideBin } = require('yargs/helpers');
// to remove the -- in front of arguments.
// like hideBin('--example'); // output -> example
const argv = yargs(hideBin(process.argv)).argv;

const packageJson = require('./package.json');

if (argv.version || argv.v) {
  console.log(packageJson.version);
} else if (argv.name || argv.n) {
  console.log(packageJson.name);
} else if (argv.init) {
  // Put our functionality of printing hello world, asking name etc.
} else {
  console.log('Please specify an argument/command');
}


// IIFE for using async functions
(async () => {
  const response = await prompts({
    type: 'text',
    name: 'value',
    message: 'Enter your name',
  });

  console.log('Hello ' + response.value); // the name the user entered.
  console.log(chalk.bgCyan.white(`Hello ${response.value}`));
  console.log(chalk.bgYellowBright.black(`Welcome to "Hello World with CLIs"`));
  CFonts.say(`Hello ${response.value}`, {
    font: 'tiny',
    colors: ['cyanBright'],
  });

  CFonts.say(`Welcome to Hello World with CLIs`, {
    font: 'simple',
    colors: ['cyanBright'],
  });

})();
