// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives

let age: number;

age = 12;

let userName: string;

userName: 'abc';


// More complex types

let hobbies: string[]; // this means array of strings

hobbies = ['Sports', 'Cooking'];

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