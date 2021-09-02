/* Basic types */

// Number
const n: number = 5;
// Mostly TS don't need obvious type definition, its only example.
// But if we didn't assign type "n" would have literal type of "5", not "number" cuz we never able to change n;

// String
const str: string = 'lalala';

// Boolean
const isTrue: boolean = true;

// Object
type objType = {
    a: number;
    b: string
}
const obj: objType = {
    a: 1,
    b: "1",
    // c: 3 - we can't use any other properties other that defined in type definition
}
// obj.c = 'gkkk' - this behaviour restricted too