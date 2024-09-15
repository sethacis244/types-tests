import { Iter, Primitive, U64 } from "./definition_1_1";

//Set D, recursively defined
export type D = Primitive | Du64 | Diter | D[]; //D[] to handle tuples of D

// Definition of Du64 as array
export type Du64 = {
  [key: U64]: D;
};

// Definition of Diter
type Diter = {
  [key: Iter]: D;
};

// examples
const exampleDu64: Du64 = {
  [0]: true, //du64 as key
  [1]: "a",
  [2]: { [Symbol("iter")]: 42 }, //symbol as iterator used
};

const exampleDiter: Diter = {
  [Symbol("iter0")]: false, //iterator as key
  [Symbol("iter1")]: 61,
  [Symbol("iter2")]: exampleDu64,
};

//examples tree set of type D
const tree: D = [exampleDu64, exampleDiter, 7, [exampleDu64, exampleDiter]];
