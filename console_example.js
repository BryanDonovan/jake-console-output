#!/usr/bin/env node

function color(str) {
    return '\u001b[' + 92 + 'm' + str + '\u001b[0m';
}

function log(str) {
     console.log(color('✓' + ' ' + str));
}

console.log("\nPrinting with color and non-ascii symbol\n");
log('foo');
log('bar');
