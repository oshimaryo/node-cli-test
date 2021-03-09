#!/usr/bin/env node

const prompts = require('prompts'); // add prompts
const CFonts = require('cfonts'); // funny text decoration

const ora = require('ora');
const spinner = ora('Loading...').start();

setTimeout(() => {
    spinner.stop();

    (async () => {
        const response = await prompts({
            type: 'text',
            name: 'value',
            message: 'What is your name?',
        });

        CFonts.say(`Hello ${response.value}`, {
            font: 'tiny',
            colors: ['cyanBright'],
        });

        CFonts.say(`Welcome to Hello World with CLIs`, {
            font: 'simple',
            colors: ['cyanBright'],
        });
    })();
}, 2000);
