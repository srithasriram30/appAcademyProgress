function eat() {
  console.log(`${this.name} eats fish food`);
}

class Fish {
  constructor(name) {
    this.name = name;
  }

  swim() {
    console.log(`${this.name} swimming in the water`);
  }
}

const nemo = new Fish('Nemo');

/********************************* Scenario 1 *********************************/
 eat(); // ?
//prediction: undefined eats fish food
//actual: undefined eats fish food

/********************************* Scenario 2 *********************************/
nemo.eat = eat;
nemo.eat(); // ?

//prediction: Nemo eats fish food
//actual: Nemo eats fish food

/********************************* Scenario 3 *********************************/
nemo.eat = eat;
eat(); // ?

//prediction: undefined eats fish food
// actual: undefined eats fish food

/********************************* Scenario 4 *********************************/
 nemo.swim(); // ?

//prediction: Nemo swimming in the water
// actual: Nemo swimming in the water

/********************************* Scenario 5 *********************************/
const swim = nemo.swim;
swim(); // ?

//prediction: Nemo swimming in the water
// actual: throws an error
