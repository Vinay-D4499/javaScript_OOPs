// super keyword will always refer to parent class

class animal{
    constructor(color) {
        this.color = color; //Here this.color is class variable color is method variable
    }
    printColor(){
        console.log(this.color)
    }
}
class Dog extends animal{
    constructor(color,food){
        super(color);  // Super method is used to call parent class constructor
        this.food = food
    }
    eating(){
        console.log("eating: "+ this.food)
    }
    display(){
        this.printColor();
        this.eating();
    }
}
dogObj = new Dog("brown","bone")
dogObj.display();