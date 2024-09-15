import { Double, Integer, Iter } from "../data_trees/definition_1_1";
import { Identifier, Property } from "./definition_2_1";

//  A property mapping P is a mapping of identifiers to properties
export type P = Record<Identifier, Property>;

//  The three types have the same form, so we will define only F : F is a function
//  from identifiers to pairs of form p/i, where p is a property, and i ≥ 0 is an index.
export type F = Record<Identifier, [Property, Integer]>;
export type F64 = Record<Identifier, [Property, Double]>;
export type FIter = Record<Identifier, [Property, Iter]>;

export const Nat: Identifier = "Nat";
