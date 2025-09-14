// Step 1: Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

// Step 2: Teacher example
const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: false,
  contract: false,
};
console.log("Teacher Example:");
console.log(teacher3);

// Step 3: Directors interface extends Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}
const director1: Directors = {
  firstName: 'Jane',
  lastName: 'Smith',
  location: 'New York',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log("Director Example:");
console.log(director1);

// Step 4: printTeacher function interface
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};
console.log("Print Teacher Example:");
console.log(printTeacher("John", "Doe"));

// =========================
// Step 5: StudentClass Interfaces and Implementation
// =========================

// Interface for the constructor
interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// Interface for the class itself
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Class implementation
class StudentClass implements StudentClassInterface {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Example usage
const student1 = new StudentClass("Alice", "Johnson");
console.log("Student Example:");
console.log(student1.displayName());   // Alice
console.log(student1.workOnHomework()); // Currently working

