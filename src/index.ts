import commander from "commander";
let version: [string] = [
  "--version",
  "-v"
];

let help: [string] = [
  "--help",
  "help",
  "-h"
];



process.argv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
  
});
