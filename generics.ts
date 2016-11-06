function GetType<T>(val: T): string {
    return typeof (val);
}

var aStr = "A String";
var aNum = 10;

document.write(GetType(aStr) + "<br />");
document.write(GetType(aNum) + "<br />");

interface Vehicle {
    drive(): any;
}

class Car implements Vehicle {
    constructor(private wheel: number) { }

    drive(): void {
        document.write("The car drives with " + this.wheel + " wheels<br />");
    }
}

class Bicycle implements Vehicle {
    constructor(private wheel: number) { }

    drive(): void {
        document.write("The bicycle drives with " + this.wheel + " wheels<br />");
    }
}

var car = new Car(4);
var bike = new Bicycle(2);

function GetWheels<w extends Vehicle>(veh: w): number {
    return veh.drive();
}

GetWheels(car);
GetWheels(bike);

class GenericNumber<T> {
    add: (val1: T, val2: T) => T;
}

var aNumber = new GenericNumber<number>();
aNumber.add = function (x, y) { return x + y };
document.write("5 + 4 = " + aNumber.add(5, 4) + "<br />");

var aStringNumber = new GenericNumber<string>();
aStringNumber.add = function (x, y) { return String(Number(x) + Number(y)); };
document.write("5 + 6 = " + aStringNumber.add("5", "6") + "<br />");