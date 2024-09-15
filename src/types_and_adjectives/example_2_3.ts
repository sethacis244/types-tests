//Example 2.3
//Natural number: P( Nat ) = (?zero) ∨ (?succ, Nat)

import { Property } from "./definition_2_1";
import { F, Nat, P } from "./definition_2_2";

const P_NAT: P = {
  Nat: {
    or: ["?zero", ["?succ", Nat]],
  },
};

const F_NAT: F = {
  op: [Nat, 0],
  pred: [{ or: [Nat, ["succ", "T"]] }, 1],
};

const even: Property = "even";
const odd: Property = "prop";

//P( even ) = ( ?zero) ∨ ( ?succ, odd )
const P_EVEN: P = {
  even: {
    or: ["?zero", ["?succ", odd]],
  },
};

//P( odd ) = ( ?succ, even )
const P_ODD: P = {
  odd: ["?succ", even],
};

// Examples
const zero: Property = "zero";
const one: Property = ["succ", zero];
const two: Property = ["succ", one];
const three: Property = ["succ", two];
const four: Property = ["succ", three];

// for ts type checking
const isEven = (number: Property): boolean => {
  if (number === "zero") {
    return true;
  } else if (Array.isArray(number) && number[0] === "succ") {
    return isOdd(number[1] as Property);
  }
  return false;
};

const isOdd = (number: Property): boolean => {
  if (Array.isArray(number) && number[0] === "succ") {
    return isEven(number[1] as Property);
  }
  return false;
};

// Test cases
console.log("Zero is even:", isEven(zero)); // True
console.log("One is odd:", isOdd(one)); // True
console.log("Two is even:", isEven(two)); // True
console.log("Three is odd:", isOdd(three)); // True
console.log("Four is even:", isEven(four)); // True
