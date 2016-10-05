"use strict";
var version = [
    "--version",
    "-v"
];
var help = [
    "--help",
    "help",
    "-h"
];
process.argv.forEach(function (val, index) {
    console.log(index + ": " + val);
});
