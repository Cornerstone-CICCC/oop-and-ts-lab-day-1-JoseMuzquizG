class Animal {
    static remainingAnimals = 0
    #name;
    #species;
    #energy;

    constructor(name, species, energy) {
        this.#name = name
        this.#species = species
        this.#energy = energy
        Animal.remainingAnimals++
    }


    // Getters and Setters
    getName() {
        return this.#name
    }
    setName(newName) {
        this.#name = newName
    }
    getSpecies() {
        return this.#species
    }
    setSpecies(newSpecies) {
        this.#species = newSpecies
    }
    getEnergy() {
        return this.#energy
    }
    setEnergy(newEnergy) {
        this.#energy = newEnergy
    }

    //Methods
    attack(target) {
        if (this.#energy > 10) {
            this.#energy -= 10
            target.energy -= 10
            return `${this.#name} attacks, dealing 10 damage to ${target.getName()}. ${this.#name} energy is now: ${this.#energy}. ${target.getName()} energy is now: ${target.energy}`
        } else {
            return `${this.#name} does not have enough energy, it needs at least 10. It has to eat first.`
        }
    }

    eat() {
        this.#energy += 10
        return `${super.getName()} energy increases by 10 to ${this.#energy}`
    }
}   

class Bird extends Animal {
    #canFly;
    constructor(name, species, canFly) {
        super(name, species)
        this.#canFly = canFly
        this.energy = 100
    }

    attack(target) {
        if (this.energy > 20) {
            this.energy -= 20
            target.energy -= 20
            return `${super.getName()} flies into battle, dealing 20 damage to ${target.getName()}. ${super.getName()} energy is now: ${this.energy}. ${target.getName()} energy is now: ${target.energy}`
        } else {
            return `${super.getName()} does not have enough energy, it needs at least 20. It has to eat first.`
        }
    }

    eat() {
        this.energy += 10
        return `${super.getName()} energy increases by 10 to ${this.energy}`
    }
    
    canFly() {
        return this.#canFly
    }

    
}

class Mammal extends Animal {
    #furColor;
    constructor(name, species, furColor) {
        super(name, species)
        this.#furColor = furColor
        this.energy = 200
    }
    
    attack(target) {
        if (this.energy > 50) {
            this.energy -= 50
            target.energy -= 50
            return `${super.getName()} runs forwards, dealing 50 damage to ${target.getName()}. ${super.getName()} energy is now: ${this.energy}. ${target.getName()} energy is now: ${target.energy}`
        } else {
            return `${super.getName()} does not have enough energy, it needs at least 50. It has to eat first.`
        }
    }
    
    eat() {
        this.energy += 20
        return `${super.getName()} energy increases by 20 to ${this.energy}`
    }

    furColor() {
        return this.#furColor
    }
}

class Reptile extends Animal {
    #coldBlooded;
    constructor(name, species, coldBlooded) {
        super(name, species)
        this.#coldBlooded = coldBlooded
        this.energy = 100
    }

    attack(target) {
        if (this.energy > 30){
            this.energy -= 30
            target.energy -= 30
            return `${super.getName()} launches itself, dealing 30 damage to ${target.getName()}. ${super.getName()} energy is now: ${this.energy}. ${target.getName()} energy is now: ${target.energy}`
        } else {
            return `${super.getName()} does not have enough energy, it needs at least 30. It has to eat first.`
        }
    }

    eat() {
        this.energy += 15
        return `${super.getName()} energy increases by 15 to ${this.energy}`
    }

    coldBlooded() {
        return this.#coldBlooded
    }
}

// DRIVER CODE: Create instances of the subclasses and use their properties and methods. You can modify this to add more attacks and eating actions.

const eagle = new Bird("Eagle", "Bird of Prey", true);
console.log(`Name: ${eagle.name}, Species: ${eagle.getSpecies()}, Can Fly: ${eagle.canFly()}`);

const lion = new Mammal("Lion", "Big Cat", "Golden");
console.log(`Name: ${lion.getName()}, Species: ${lion.getSpecies()}, Fur Color: ${lion.furColor()}`);

const snake = new Reptile("Snake", "Serpent", true);
console.log(`Name: ${snake.getName()}, Species: ${snake.getSpecies()}, Cold-Blooded: ${snake.coldBlooded()}`);

// // Example attack
console.log("\n--- Attacks ---");
console.log(eagle.attack(lion));
console.log(eagle.attack(lion));
console.log(snake.attack(eagle));
console.log(eagle.attack(lion));
console.log(lion.attack(snake));
console.log(eagle.attack(lion));

// // Display the remaining number of animals with energy
console.log(`\n--- Animals with energy remianing: ${Animal.remainingAnimals} ---`)

// Example eating
console.log("\n--- Eating ---");
console.log(eagle.eat());
console.log(lion.eat());
console.log(snake.eat());