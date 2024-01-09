class Person {
  // Your code here
  constructor(name,age){
    this.name = name;
    this.age = age;
  }

  sayHello(){
    let greeting = `Hi, I'm ${this.name}`
    console.log(greeting);
    return greeting;
  }

  visit(person2){
    let visit = `${this.name} visited ${person2.name}`;
    console.log(visit);
    return visit;
  }

  switchVisit(person2){
    let switchVisit = `${person2.name} visited ${this.name}`;
    console.log(switchVisit);
    return switchVisit;
  }

  update(newPerson) {
    if (typeof newPerson !== 'object') {
      throw TypeError("Type must be an object");
    }
    if (!newPerson.hasOwnProperty("name")) {
      throw TypeError("Input must include a name property");
    }
    if (!newPerson.hasOwnProperty("age")) {
      throw TypeError("Input must include a age property");
    }
    this.name = newPerson.name;
    this.age = newPerson.age;
  }

  tryUpdate(newPerson) {
    try {
      this.update(newPerson);
    } catch (error) {
      return false;
    }
    return true;
  }

  static greetAll(people){
    let greetings = [];
    for(let i=0; i<people.length;i++){
      greetings.push(people[i].sayHello());

    }
    return greetings;
  }
}

const person = new Person("Alice", 23); 
const person2 = new Person("Bob", 29);
//Person.greetAll([person, person2]);
module.exports = Person;