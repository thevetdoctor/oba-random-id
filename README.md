# What is this?
A simple random ID generator

# Installation

`npm install oba-random-id --save`

# Usage

```
    The `randomId` function takes two(2) arguments namely:

    length(required): The number of characters required in the random ID to be generated 

    type(optional): The type of characters required to compose the random ID

    Options for type include:

    'numeric' | 'alphanumeric' | 'uppercase' | 'lowercase'

    The types and their equivalents are as listed below

    numeric : '0123456789';
    alphanumeric : '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZ';
    uppercase : 'ABCDEFGHIJKLMNOPQRSTUVWXTZ';
    lowercase : 'abcdefghijklmnopqrstuvwxyz';

    Omitting the `type` argument uses the `all` option as stated below

    all : '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghijklmnopqrstuvwxyz';

```

# Examples

```
import randomId from 'oba-random-id';

randomId(10); // Cu6QW4rerT
randomId(6, 'numeric'); // 198026
randomId(14, 'alphanumeric'); // 2BV4FE84RVDK4V
randomId(5, 'uppercase'); // IHWKF
randomId(15, 'lowercase'); // kswsmjyzjudhgzt

On a second run,

randomId(10); // voleNDsmC3
randomId(6, 'numeric'); // 721659
randomId(14, 'alphanumeric'); // CV1JGUCA151DLV
randomId(5, 'uppercase'); // PLPEZ
randomId(15, 'lowercase'); // yldnmpykoakqjvz


const response = require('oba-random-id'); 

randomId(10); // Cu6QW4rerT
randomId(6, 'numeric'); // 198026
randomId(14, 'alphanumeric'); // 2BV4FE84RVDK4V
randomId(5, 'uppercase'); // IHWKF
randomId(15, 'lowercase'); // kswsmjyzjudhgzt

On a second run,

randomId(10); // voleNDsmC3
randomId(6, 'numeric'); // 721659
randomId(14, 'alphanumeric'); // CV1JGUCA151DLV
randomId(5, 'uppercase'); // PLPEZ
randomId(15, 'lowercase'); // yldnmpykoakqjvz

```