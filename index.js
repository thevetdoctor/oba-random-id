"use strict";
exports.__esModule = true;
var randomId = function (length, type) {
    var numeric = '0123456789';
    var alphanumeric = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZ';
    var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXTZ';
    var lowercase = 'abcdefghijklmnopqrstuvwxyz';
    var characters = '';
    if (type === 'numeric') {
        characters = numeric;
    }
    else if (type === 'alphanumeric') {
        characters = alphanumeric;
    }
    else if (type === 'uppercase') {
        characters = uppercase;
    }
    else if (type === 'lowercase') {
        characters = lowercase;
    }
    else {
        characters = "" + alphanumeric + lowercase;
    }
    var code = '';
    for (var i = 0; i < length; i++) {
        code += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return code;
};
exports["default"] = randomId;
