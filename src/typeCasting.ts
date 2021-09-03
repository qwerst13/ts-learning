// Type casting helps you tell TS that some value is of a specific type where TS is not able to detect it on its own.

const p = document.querySelector("p"); // here TS understand that "p" could be HTMLParagraphElement or null, cuz it can be missed on page.
const p1 = document.querySelector("#p"); // here "p1" - is only Element type, TS can't understand type from getting element by id.

// If we want to get access to value method of input element - we need to tell to TS, that we have input element here
// There 2 ways:
const input1 = <HTMLInputElement>document.getElementById("text"); // Note that this way interfere with React syntax, so there 2nd way:
const input2 = document.getElementById("text") as HTMLInputElement;

input1.value = "Hi there!";
input2.value = "This works too!";
