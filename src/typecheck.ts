//
// typecheck.ts
// Created by Shota Shimazu on 2016-10-05
// Copyright (c) 2016 Shota Shimazu
// Licensed under the Apache v2, see LICENSE for detail.
//


let basictypes = {
  String:    "string",
  Integer:   "int",
  Floating:  "number"
}


module TypeChecker {

  // Checker functions
  function integer(val: any): boolean {
    let status = false;

    if (String(val).match(".")) {
      status = false;
    } else {
      status = true;
    }

    return status;
  }


  function number(val: any): boolean {
    let status: boolean;
    let allowChars = [
      "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
    ];

    for (var i = 0; i <= allowChars.length; i++) {
      if (String(val).match(allowChars[i])) {
        status = true;
      } else {
        status = false;
      }
    }

    return status;
  }


  function bool(val: any): boolean {
    let status: boolean;
    let allowValues = [
      "true", "false", "0", "1", "on", "off"
    ];

    for (var i = 0; i <= allowValues.length; i++) {
      if (String(val).match(allowValues[i])) {
        status = true;
      } else {
        status = false;
      }
    }

    return status;
  }
  
}