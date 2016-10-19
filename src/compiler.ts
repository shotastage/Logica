//
// compiler.ts
// Created by Shota Shimazu on 2016-10-05
// Copyright (c) 2016 Shota Shimazu
// Licensed under the Apache v2, see LICENSE for detail.
//

import fm = require('fs');
import readline = require('readline');

var targetFile: string;

let target = fm.readFile(targetFile, "utf-8", (err, data) => {
    if(err) {
        console.log(err);
        return;
    }
    var str = data.toString();
    console.log(str);
});