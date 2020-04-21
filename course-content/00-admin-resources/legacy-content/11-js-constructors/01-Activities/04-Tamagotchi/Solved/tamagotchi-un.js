// constructor function which can be used to create "digitalpal" objects
var DigitalPal = function () {
    this.hungry = false;
    this.sleepy = false;
    this.bored = true;
    this.age = 0;

    // method which feeds the digitalpal when they are hungry and sets them to sleepy
    this.feed = function () {
        if (this.hungry === true) {
            console.log("That was yummy!");
            this.hungry = false;
            this.sleepy = true;
        }
        else {
            console.log("No thanks, I'm full.");
        }
    };

    // method which puts the digitalPal to sleep when they are sleepy, increases their age by one,
    // and sets them to bored
    this.sleep = function () {
        if (this.sleepy === true) {
            console.log("ZZzzZZZzzZZz~~");
            this.sleepy = false;
            this.bored = true;
            this.increaseAge();
        }
        else {
            console.log("No way! I'm not tired!");
        }
    };

    // method which allows the user to play with their digitalpal when they are bored and sets them to hungry
    this.play = function () {
        if (this.bored === true) {
            console.log("Yay! Let's play!");
            this.bored = false;
            this.hungry = true;
        }
        else {
            console.log("Not right now. Maybe later?");
        }
    };

    // method which is called in "this.sleep" to increase the age of the digitalpal by one
    this.increaseAge = function () {
        this.age++;
        console.log("Happy Birthday to me! I am " + this.age + " old!");
    };
};

// creates a new "digitalpal" object with the name "dog"
var dog = new DigitalPal();

// adds the property "outside" to the "dog" object and sets it to false
dog.outside = false;

// adds the function/method "bark" to the "dog" object which prints a message to the screen
dog.bark = function () {
    console.log("Woff!!");
}

// adds the method "letoutside" to the "dog" object which lets "dog" outside when it's inside
dog.letOutside = function () {
    if (this.outside === false) {
        this.outside = true;
        console.log("I love being outside");
    } else {
        console.log("we are already outside");
    }
}


// adds the method "letInside" to the "dog" object which lets "dog" inside when it's outside
