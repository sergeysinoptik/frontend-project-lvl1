#!/usr/bin/env node

import { name } from '../src/cli.js';

const welcome = (nameStr) => {
    return 'Hello, ' + name + '!';
};

console.log(welcome());
