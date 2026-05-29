const multilineString = `This is line one.
This is line two.
This is line three.`;

function generateCard(name, age, city) {
  return `
  <div class="card">
  <h2>${name}</h2>
  <p>Age: ${age}</p>
  <p>City: ${city}</p>
  </div>
  `;
}

const double = (num) => num * 2;
const greet = (name) => `Hello ${name}`;

const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map((num) => num * 2);
const evens = numbers.filter((num) => num % 2 === 0);
const sum = numbers.reduce((total, num) => total + num, 0);
