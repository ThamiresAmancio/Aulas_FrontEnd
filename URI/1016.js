'use stric';

const input = require('fs').readFileSync('/dev/stdin', 'utf8');

const minutos = (60 * input)/30;

console.log(`${minutos} minutos`);