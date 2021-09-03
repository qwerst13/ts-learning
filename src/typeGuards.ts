type SN = string | number;
type NB = number | boolean;

type Universal = SN & NB;

function add(a: SN, b: SN) {
  // return a + b; - won't work cuz exact type unknown and can be any from string or number, so we need:
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

// this checks works good for primitive types, but for objects we need another checking:
type ObjType1 = {
  name: string;
  age: number;
};
type ObjType2 = {
  name: string;
  surname: string;
};
type unknownObjType = ObjType1 | ObjType2;

function printParams(obj: unknownObjType) {
  console.log(obj.name); // working good, cuz we have name in both types definitions
  // if (obj.age) console.log(obj.age) - this won't work, cuz we don't know about this field in ObjType2

  if ("age" in obj) console.log(obj.age);
  if ("surname" in obj) console.log(obj.surname);
}

// for classes we can use "instanceof" for type guarding
