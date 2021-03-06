//
// index.ts
// Created by Shota Shimazu on 2016-10-05
// Copyright (c) 2016 Shota Shimazu
// Licensed under the Apache v2, see LICENSE for detail.
//


// CommandLine Tools (CLI) for Logica.
import commands = require("commander");


commands

  // Show version of Logica.
  .version('0.0.1')

  // Create a new Logica project, but it not nessesary.
  .command('init', 'create a new CSSS prject.')

  // Compile or build csss script.
  .command('compile [file]', 'compile csss file.')
  .command('watch', 'watch files.')
  .command('build', 'build Logica files.')

  // Manage Logica plugins
  .command('install [pulgin]', 'install extra plugin.')
  .command('installed', 'show all installed plugins.')
  .command('remove [plugin]', 'remove plugin.')

  // Test command
  .command('dammy', 'test run.')


  .option('-h, --help', 'show help.')
  .option('-g, --global--install', 'install plugin globally.')
  .parse(process.argv)
;
