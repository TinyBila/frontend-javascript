// Define the Teacher interface
interface Teacher {
  readonly firstName: string;       // can only be set when initialized
  readonly lastName: string;        // can only be set when initialized
  fullTimeEmployee: boolean;        // must always be defined
  yearsOfExperience?: number;       // optional
  location: string;                 // must always be defined
  [key: string]: any;               // allows adding extra properties like contract
}

// Example usage
const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false,   // extra property allowed by index signature
};

console.log(teacher3);

