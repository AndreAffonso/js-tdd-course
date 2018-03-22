import react from 'react';
import reactDOM from 'react-dom';
import * as R from 'ramda';

import sum, { sub } from './utils';

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8];

const arr3 = R.intersection(arr1, arr2);

// console.log('união: ', arr3);

console.log(sub(71, 50));
console.log('merda');
