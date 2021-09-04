// First generic type that we already know is Array
const names: Array<string> = ['Anna', 'Sue']; // This is same with: string[]

// Another generic type is Promise
const promise = new Promise(((resolve, reject) => {
    setTimeout(
        () => {resolve('Resolved value')},
        2000);
}));