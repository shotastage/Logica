//
// index.ts
// Created by Shota Shimazu on 2016-10-05
// Copyright (c) 2016 Shota Shimazu
// Licensed under the Apache v2, see LICENSE for detail.
//

import commands = require("commander");


commands
  .version('0.0.1')
  .command('init', 'create a new CSSS prject.')
  .command('compile [file]', 'compile csss file.')
  .command('install [pulgin]', 'install extra plugin.')
  .command('installed', 'show all installed plugins.')
  .command('remove [plugin]', 'remove plugin.')
  .command('watch', 'watch files.')
  .command('build', 'build CSSS package.')
  .command('dammy', 'test run.')
  .option('-h, --help', 'show help.')
  .option('-g, --global--install', 'install plugin globally.')
  .parse(process.argv)
;
