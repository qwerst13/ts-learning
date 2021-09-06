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

function Log2() {

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

