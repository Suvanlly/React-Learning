// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives

let age: number;

age = 12;

let userName: string;

userName: 'abc';

let boo: boolean = true;


// More complex types

let hobbies: string[]; // this means array of strings

hobbies = ['Sports', 'Cooking'];

let arr2: string[][] = [['aa', 'bb']]

let tuple: [number, string, boolean] = [2, 'a', true];
let tuple2: [string, string][] = [['a', 'b']]

// this should be avoid
let person: any;

person = {
  name: 'Max',
  age: 32
}

let person_specific: {
  name: string,
  age: number,
}

person_specific = {
  name: 'sophie',
  age: 30
}

// Union types (allow multiple types)
let course: string | number = 'react';
// now it won't have the error
course = 1234;