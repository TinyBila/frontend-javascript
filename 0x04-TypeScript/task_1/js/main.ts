/**
 * Task 1 - Teacher interface example
 */

// Teacher interface:
// - firstName and lastName are readonly (only set at initialization)
// - fullTimeEmployee (required boolean)
// - yearsOfExperience? (optional number)
// - location (required string)
// - index signature allows extra properties like contract: boolean
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

// Example teacher object that uses an extra property `contract`
const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false
};

console.log(teacher3);

// Uncommenting the following line would produce a TypeScript error
// because firstName is readonly and cannot be modified after initialization:
// teacher3.firstName = 'Jane'; // Error: Cannot assign to 'firstName' because it is a read-only property.
