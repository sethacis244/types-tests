// Define primitive types
export type Never = never; //native typescript never type
export type Unit = void; // alternative of void type
export type Bool = boolean; //native
export type Char = string; // no char in js/ts
export type Selector = string; // assumed to be a string prefixed with '?'
export type U64 = number; // number for simplicity
export type Iter = symbol; // symbols as native unique iterators
export type Integer = number; //number, no int in ts/ts
export type Double = number; // no double in js/ts

//primitive type
export type Primitive =
  | Never
  | Unit
  | Bool
  | Char
  | Selector
  | U64
  | Iter
  | Integer
  | Double;

//Tag type
export type Tag = Bool | Char | Selector;
