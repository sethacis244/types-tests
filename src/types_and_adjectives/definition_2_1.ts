import { Primitive, Tag } from "../data_trees/definition_1_1";

export type PropertyMap = Record<string, Property>; //string as literal

export type Identifier = string;

export type Property =
  | Primitive //If T is a primitive type, as defined in Definition 1.1, then T is a property
  | Tag //If c is a selector, boolean or character constant (the tag types), then c is also a property.
  | [] //( ) is a property.
  | Property[] //If p1, . . . , pn (n > 0) are properties, and P is a property, then (p1, . . . , pn)◦P is a property.
  | { and: Property[] } //p1 ∧ p2 ∧ ... ∧ pn
  | { or: Property[] } //p1 ∨ p2 ∨ ... ∨ pn
  | { forall: Property } //p∀
  | { exists: Property }; //p∃
