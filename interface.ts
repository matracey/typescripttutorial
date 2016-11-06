interface SuperHero {
    realName: String;
    superName: String;
};

var superman: SuperHero = {
    realName: "Clark Kent",
    superName: "Superman"
};

document.write(superman.realName + " is " + superman.superName + "<br />");

// Interface #2
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

car.drive();
bike.drive();