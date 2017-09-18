/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule hideKeyboard
 *
 * This function hides the currently-open keyboard, if any
 */
'use strict';

var TextInputState = require('TextInputState');

function hideKeyboard() {
  TextInputState.hideKeyboard(TextInputState.currentlyFocusedField());
}

module.exports = hideKeyboard;
