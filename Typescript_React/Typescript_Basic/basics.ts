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

// Object
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

// ---------- Union ----------------
// Union types (allow multiple types)
let course: string | number = 'react';
// now it won't have the error
course = 1234;


// ---------- Enum 枚举 --------------
// 用数字来表示一些状态

enum LiveStatus {
  SUCCESS = 0,
  FAIL = -1,
  STREAMING = 1
}

// ------------ Type ----------------
type A = number | string
type B = boolean | string

let a: A
a = 999;
a = 'string'

// type不能重复定义，这是和interface的区别
type Card = {
  name: string;
  description: string;
}

// ---------- Interface ----------------
// interface 是可以重复的，可以补充property，变成新的类型
interface User {
  name: string;
  age: number;
  smoke: boolean;
}

interface User {
  gender: string;
}

// object里面的property就是扩充后的User里的所有property
const object: User = {
  name: 'sophie',
  age: 20,
  smoke: false,
  gender: 'female'
}

// ---------- Function ----------------
function hello (a: string, b: string) {
  return a + b;
}

// this specify the return value tyoe must be number
function hello2 (a: number, b: string): number {
  return 100;
}

// ---------- Unknown ----------------

type Data = {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  // 下面这行代表推断出获取的数据和Data的类型是相似的
  const data = await res.json() as Data
}
