function add(a, b) {
  return a + b;
}

// is there is no typescript, JS don't know which type should it use.
const result = add(2, 5);

// const result = add('2', '5');


console.log(result);