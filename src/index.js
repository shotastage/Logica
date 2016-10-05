"use strict";
var commands = require("commander");
commands
    .version('0.0.1')
    .option('-h, --help', 'Show help.')
    .command('compile [file]', 'compile csss file.')
    .parse(process.argv);
