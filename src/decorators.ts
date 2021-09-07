function Logger(logString: string) {
    console.log('Logger factory')

    return function (constructor: Function) {
        console.log('Logger Decorator');

    }
}

function WithTemplate(text: string, hookId: string) {
    console.log('Template factory')
    return function (constructor: Function) {
        console.log('Template Decorator')
    }
}

function Log(target: any, propertyName: string) {
    console.log('Property decorator');
    console.log(target, propertyName)
    console.log(target)
}

//@Logger('LOGGING...') //This is special syntax for decorators
//@WithTemplate('type here:', 'textLabel')
class Person {
  name: string = "Anastasia";

  constructor() {
    console.log("Creating person object...");
  }
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
    console.log('Accessor decorator');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

class Product {
    title: string;
    private _price: number;

    set price(value: number) {
        if (value > 0) {
            this._price = value;
        } else {
            throw new Error('Should be positive')
        }
    }

    constructor(title: string, price: number) {
        this.title = title;
        this._price = price;
    }

    getPriceWithTax(tax: number) {
        return this._price * (1 + tax)
    }
}

interface ValidatorConfig {
    [property: string]: {
        [validatableProp: string]: string[]
    }
}

const registeredValidators: ValidatorConfig = {};

function Required(target: any, propName: string) {
    registeredValidators[target.constructor.name] = {
        [propName]: ['required']
    }
}

function PositiveNumber(target: any, propName: string) {
    registeredValidators[target.constructor.name] = {
        [propName]: ['positive']
    }
}

function validate(obj: any) {
    const objectValidatorConfig = registeredValidators[obj.constructor.name];
    if(!objectValidatorConfig) {
        return true
    }
    for (const prop in objectValidatorConfig) {
        for (const validator of objectValidatorConfig[prop]) {
            switch (validator) {
                case 'required': return !!obj[prop];
                case 'positive': return obj[prop] > 0;
            }
        }
    }
    return true;
}

class Course {
    @Required
    title: string;
    @PositiveNumber
    price: number;

    constructor(t: string, p: number) {
        this.title = t;
        this.price =p;
    }
}

const courseForm = document.querySelector('form')!;

courseForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const titleEl = document.getElementById('title') as HTMLInputElement;
    const priceEl = document.getElementById('price') as HTMLInputElement;

    const title = titleEl.value;
    const price = +priceEl.value;

    const createdCourse = new Course(title, price);

    if (!validate(createdCourse)) {
        alert('Wrong values');
        return;
    }
    console.log(createdCourse)
})

let up: Uppercase<'string'> = 'STRING';