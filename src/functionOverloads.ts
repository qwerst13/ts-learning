{
  type SN = string | number;

  function add(a: SN, b: SN) {
    if (typeof a === "string" || typeof b === "string") {
      return a.toString() + b.toString();
    }
    return a + b;
  }

  const nType = add(1, 2); // In this case we can be sure about type, but TS don't know it
  const sType = add("a", "b") as string; // We can use type casting, or...

  sType.split(""); // This works, because we said that result would be a string
}

// For this situation can be used function overloads syntax:
{
  type SN = string | number;

  function add(a: number, b: number): number; //This overloads tells TS what result would we have in different situations
  function add(a: string, b: number): string;
  function add(a: number, b: string): string;
  function add(a: string, b: string): string;
  function add(a: SN, b: SN) {
    if (typeof a === "string" || typeof b === "string") {
      return a.toString() + b.toString();
    }
    return a + b;
  }

  let sType = add("a", 1); // Now we can be sure about type
}
