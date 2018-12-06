var animalPopulation = 0;

function run(){
    var tiger = new Tiger("Tigger");
    var bear = new Bear("Pooh");
    var uni = new Unicorn("Rarity");
    var gif = new Giraffe("Gemma");
    var bot = new Zookeeper("Zoebot");

    bot.feedAnimals([tiger, bear, uni, gif], "sushi");

    console.log(Animal.getPopulation());
}

class Animal {
    constructor(name, favoriteFood){
        this.name = name;
        this.favoriteFood = favoriteFood;
        animalPopulation++;
    }

    sleep() {
        console.log(this.name + " sleeps for 8 hours");

    }

    eat(food) {
        console.log(this.name + " eats " + food);

        (food === this.favoriteFood) ? console.log("YUM!!! " + this.name + " wants more " + food) : this.sleep();
    }

    static getPopulation() {
        return animalPopulation;
    }
}

class Tiger extends Animal{

    constructor(name) {
        super(name, "meat");
    }

}

class Bear extends Animal{
    constructor(name) {
        super(name, "fish");
    }

    sleep() {
        console.log(this.name + " hibernates for 4 months");

    }
}

class Unicorn extends Animal{
    constructor(name){
        super(name, "marshmallows")
    }

    sleep(){
        console.log(this.name + " sleeps in a cloud");
    }
}

class Giraffe extends Animal{
    constructor(name){
        super(name, "leaves");
    }

    eat(food){
        (food === this.favoriteFood) ? super.eat("leaves") : console.log("YUCK!!! " + this.name + " will not eat " + food);
    }
}

class Bee extends Animal{
    constructor(name){
        super(name, "pollen")
    }

    sleep(){
        console.log(this.name + " never sleeps");
    }

    eat(food){
        (food === this.favoriteFood) ? super.eat("pollen") : console.log("YUCK!!! " + this.name + " will not eat " + food);
    }
}

class Zookeeper {
    constructor(name){
        this.name = name;
    }

    feedAnimals (animals, food) {
        console.log(this.name + " is feeding " + food + " to " + animals.length + " of " + animalPopulation + " total animals");

        for(var i = 0; i < animals.length; i++){
            animals[i].eat(food);
        }
    }
}

// class Shape {
//
//     constructor(name) {
//         this.name = name;
//         this.special = true;
//     }
//
//     sayName() {
//         console.log('Hi, I am a ', this.name + '.');
//     }
//
//     sayHistory() {
//         console.log("Shapes have a wonderful history.");
//     }
// }
//
// class Polygon extends Shape {
//
//     constructor(height, width) {
//         super('Polygon');
//         this.height = height;
//         this.width = width;
//     }
//
//     sayHistory() {
//         console.log('"Polygon" is derived from the Greek polus (many) ' +
//             'and gonia (angle).');
//     }
//
// }

//function sleep(name){
//     console.log(name + " sleeps for 8 hours");
// }
//
// function eat(name, food){
//     console.log(name + " eats " + food);
//
//     (food === favoriteFood) ? console.log("YUM!!! " + name + " wants more " + food) : sleep(name);
// }