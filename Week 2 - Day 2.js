// ==========================================
// Day 2 — Data Structures & Problem Solving
// Developer: Noor Zahid
// ==========================================

// 1. Arrays & Objects
const numbers = [10, 20, 30, 40];

const user = {
  name: "Noor Zahid",
  role: "Developer"
};

console.log("Array:", numbers);
console.log("Object:", user);


// 2. Maps & Sets
const roles = new Map([
  ["developer", "Full Stack Developer"]
]);

const uniqueNumbers = new Set([1, 2, 2, 3]);

console.log("Map:", roles);
console.log("Set:", uniqueNumbers);


// 3. Stack — LIFO
const stack = [];

stack.push("Task 1");
stack.push("Task 2");

console.log("Stack:", stack);
console.log("Removed:", stack.pop());


// 4. Queue — FIFO
const queue = [];

queue.push("Task 1");
queue.push("Task 2");

console.log("Queue:", queue);
console.log("Removed:", queue.shift());


// 5. Searching
const values = [10, 20, 30, 40, 50];

const target = 30;
const searchResult = values.includes(target);

console.log("Search Result:", searchResult);


// 6. Sorting
const unsorted = [40, 10, 30, 20];

const sorted = [...unsorted].sort((a, b) => a - b);

console.log("Sorted:", sorted);


// 7. Big-O Example
const firstValue = values[0]; // O(1)

for (const value of values) {  // O(n)
  console.log("Value:", value);
}