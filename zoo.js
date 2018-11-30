// function sleep(name){
//     console.log(name + " sleeps for 8 hours");
// }
//
// function eat(name, food){
//     console.log(name + " eats " + food);
//
//     (food === favoriteFood) ? console.log("YUM!!! " + name + " wants more " + food) : sleep(name);
// }

function run(){
    var tigger = new Tiger("Tigger");
    tigger.eat("meat");
    tigger.eat("kibble");
    var pooh = new Bear("Pooh");
    pooh.eat("fish");
    pooh.eat("meat");
}

class Tiger {

    constructor(name) {
        this.name = name;
        this.favoriteFood = "meat";
    }

    sleep() {
        console.log(this.name + " sleeps for 8 hours");

    }

    eat(food) {
        console.log(this.name + " eats " + food);

        (food === this.favoriteFood) ? console.log("YUM!!! " + this.name + " wants more " + food) : sleep(this.name);
    }

}

class Bear {
    constructor(name) {
        this.name = name;
        this.favoriteFood = "fish";
    }

    sleep() {
        console.log(this.name + " hibernates for 4 months");

    }

    eat(food) {
        console.log(this.name + " eats " + food);

        (food === this.favoriteFood) ? console.log("YUM!!! " + this.name + " wants more " + food) : sleep(this.name);
    }
}

// class Polygon {
//
//     constructor(height, width) {
//         this.name = 'Polygon';
//         this.height = height;
//         this.width = width;
//     }
//
//     //method #1
//     sayName() {
//         console.log('Hi, I am a ', this.name + '.');
//     }
//
//     //method #2
//     sayHistory() {
//         console.log('"Polygon" is derived from the Greek polus (many) ' +
//             'and gonia (angle).');
//     }
//
// }
//
// var p1 = new Polygon(20, 40);
// var p2 = new Polygon(100, 200);
//
// p1.sayName();
// p2.sayHistory();


