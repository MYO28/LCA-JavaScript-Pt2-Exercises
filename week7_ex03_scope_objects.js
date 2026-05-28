function manageGlobalCount(action, value) {
  if (typeof globalThis.globalCount === "undefined") {
    globalThis.globalCount = 0;
  }

  if (action === "increase") {
    if (typeof value !== "number" || value % 1 !== 0) {
      return "Please insert a valid integer to increase";
    }

    globalThis.globalCount += value;
    return globalThis.globalCount;
  }

  if (action === "reset") {
    globalThis.globalCount = 0;
    return "Global count has been reset to 0";
  }

  return "Invalid action!";
}

function demonstrateLocalScope() {
  let localCount = 0;
  return localCount;
}

function modifyBothVariables(value) {
  if (typeof value !== "number" || value % 1 !== 0) {
    return "Please insert a valid integer";
  }

  if (typeof globalThis.globalCount === "undefined") {
    globalThis.globalCount = 0;
  }

  globalThis.globalCount = value;
  localCount = value;

  return "Variables modified";
}

function Student(name, age, grade) {
  if (
    typeof name !== "string" ||
    typeof age !== "number" ||
    age % 1 !== 0 ||
    typeof grade !== "string"
  ) {
    return "Invalid data types passed to constructor";
  }

  this.name = name;
  this.age = age;
  this.grade = grade;
}

const student1 = new Student("Alex", 20, "A");
const student2 = new Student("Sam", 22, "B");

function Student(name, age, grade) {
  if (
    typeof name !== "string" ||
    typeof age !== "number" ||
    age % 1 !== 0 ||
    typeof grade !== "string"
  ) {
    return "Invalid data types passed to constructor";
  }

  this.name = name;
  this.age = age;
  this.grade = grade;
}

const student3 = new Student("Charlie", 19, "A+");
const student4 = new Student("Taylor", 21, "B-");
const student5 = new Student("Jordan", 23, "C");

const course = {
  title: "JavaScript Programming",
  durationWeeks: 8,
  instructor: {
    firstName: "John",
    lastName: "Doe",
    office: "Room 404",
  },
};
