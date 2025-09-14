// Define branded interfaces to uniquely identify each credit type
export interface MajorCredits {
  credits: number;
  readonly brand: "major";
}

export interface MinorCredits {
  credits: number;
  readonly brand: "minor";
}

// Functions to sum credits
export function sumMajorCredits(
  subject1: MajorCredits,
  subject2: MajorCredits
): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "major",
  };
}

export function sumMinorCredits(
  subject1: MinorCredits,
  subject2: MinorCredits
): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "minor",
  };
}

// --- Example test ---
const major1: MajorCredits = { credits: 3, brand: "major" };
const major2: MajorCredits = { credits: 4, brand: "major" };

const minor1: MinorCredits = { credits: 2, brand: "minor" };
const minor2: MinorCredits = { credits: 1, brand: "minor" };

console.log("Major Credits:", sumMajorCredits(major1, major2));
console.log("Minor Credits:", sumMinorCredits(minor1, minor2));

