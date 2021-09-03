// Discriminated unions is a special type of type guard.
// It's a pattern for working with union types that makes implementing type guards easier.
// Mostly its used for objects

interface Bird {
  type: "bird"; // we create a field that would be similar for all interfaces, but with exact literal type (better if it would have interface name lowercased)
  flyingSpeed: number;
}

interface Horse {
  type: "horse"; // same here
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;

  switch (
    animal.type //  we're able to use animal.type, cuz we defined it in all interfaces
  ) {
    case "bird":
      speed = animal.flyingSpeed;
      break;

    case "horse":
      speed = animal.runningSpeed;
      break;
  }
  console.log(speed);
}
