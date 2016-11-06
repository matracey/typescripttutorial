class Animal {
    public favoriteFood: string;
    static numberOfAnimals: number = 0;

    constructor(private name: string, private owner: string) {
        Animal.numberOfAnimals++;
    }

    ownerInfo() {
        document.write(this.name + " is owned by " + this.owner + "<br />");
    }

    static howManyAnimals(): number {
        return Animal.numberOfAnimals;
    }

    private _weight: number;

    get weight(): number {
        return this._weight;
    }

    set weight(weight: number) {
        this._weight = weight;
    }
}

var spot = new Animal("Spot", "Martin");
spot.ownerInfo();
spot.weight = 100;

document.write("Spot's weight is " + spot.weight + "<br />");
document.write("# of Animals " + Animal.howManyAnimals() + "<br />");

class Dog extends Animal {
    constructor(name: string, owner: string) {
        super(name, owner);
        Dog.numberOfAnimals++;
    }

    static howManyDogs(): number {
        return Dog.numberOfAnimals;
    }
}

var grover = new Dog("Grover", "Jimmy");
document.write("# of Animals " + Animal.howManyAnimals() + "<br />");
document.write("# of Dogs " + Dog.howManyDogs() + "<br />");
document.write("Is a Dog an Animal? " + (grover instanceof Animal) + "<br />");
document.write("Does Grover have a name? " + ('name' in grover) + "<br />");