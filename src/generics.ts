{
  // First generic type that we already know is Array
  const names: Array<string> = ["Anna", "Sue"]; // This is same with: string[]

  // Another generic type is Promise
  const promise: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Resolved value");
    }, 2000);
  });
  promise.then((resolvedValue) => resolvedValue.toLowerCase()); // Because we defined type of resolved value, we can use all string methods here
}

{
  function mergeObjects(objA: object, objB: object) {
    return Object.assign(objA, objB);
  }

  const mergedObj = mergeObjects({name: 'Anna'}, {age: 26});
  // mergedObj.name; - after all we can't use like this even if we know that this field is exist
}
// That how we can define fields using own generic type:
{
  // It's a convention to start generic types from "T" character and continue in alphabetical order
  function mergeObjectsGeneric<T, U>(objA: T, objB: U) {
    return Object.assign(objA, objB);
  }

  const mergedObj = mergeObjectsGeneric({name: 'Anna'}, {age: 26});
  mergedObj.name.toLowerCase(); // Able now by field and with full type definition
}

function identity<Type extends string>(arg: Type): Type{ // Here we pass constraints about T, without it TS can't give access to strings method, because Type not string
  console.log(arg.split(' ').length)
  return arg;
}

{
  interface Lengthy {
    length: number;
  }

  function countAndDescription<T extends Lengthy>(element: T): [T, string] {
    let description = "No value";
    if (element.length) {
      description = `Got ${element.length} elements`;
    }
    return [element, description];
  }

  countAndDescription('oneTwoThree');
  countAndDescription(['one', 'two', 'three']);
  // countAndDescription(10); - this won't work
}

{
  function extractProperty<T extends object, U extends keyof T>(obj: T, key: U) {
    return obj[key]
  }

  extractProperty({name: 'Sara'}, 'name');
  // extractProperty({age: 19}, 'name'); - TS tells about wrong key
}

class DataStorage<T> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('lalala');
// textStorage.addItem(10); - This won't work

const numberStorage = new DataStorage<number>();
numberStorage.addItem(10);
// textStorage.addItem(10); - This won't work

