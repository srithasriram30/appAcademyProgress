const {Character} = require('./character');
const {Enemy} = require('./enemy');
const {Food} = require('./food');

class Player extends Character {

  constructor(name, startingRoom) {
    super(name, "main character", startingRoom);
    this.items = [];
  }

  move(direction) {

    const nextRoom = this.currentRoom.getRoomInDirection(direction);

    // If the next room is valid, set the player to be in that room
    if (nextRoom) {
      this.currentRoom = nextRoom;

      nextRoom.printRoom(this);
    } else {
      console.log("You cannot move in that direction");
    }
  }

  printInventory() {
    if (this.items.length === 0) {
      console.log(`${this.name} is not carrying anything.`);
    } else {
      console.log(`${this.name} is carrying:`);
      for (let i = 0 ; i < this.items.length ; i++) {
        console.log(`  ${this.items[i].name}`);
      }
    }
  }

  takeItem(itemName) {

    let roomItems = this.currentRoom.items;
    let index = 0;
    for(let i =0; i<roomItems.length; i++){
        let item = roomItems[i];

        if(item.name === itemName){
            index = i;
            break;
        }
    }

    let item = roomItems[index];

    this.items.push(item);
    this.currentRoom.items.splice(index,1);
  }

  dropItem(itemName) {

    // Fill this in
    let playerItems = this.items;
    let index = 0;
    for(let i=0; i<playerItems.length;i++){
        if(playerItems.name === itemName){
            index = i;
            break;
        }
    }

    let item = playerItems[index];
    this.currentRoom.items.push(item);
    this.items.splice(index,1);

  }

  eatItem(itemName) {

    // Fill this in
    let item = this.getItemByName(itemName);

    if(item.isFood){
        this.items = this.items.filter(item => item.name !== itemName);
    }


  }

  getItemByName(name) {

    // Fill this in
    return this.items.filter( item => {
      return item.name = name;
  })[0];

  }

  hit(name) {

    // Fill this in
    // let enemy = this.currentRoom.getEnemyByName(name);
    // enemy.applyDamage(this.strength);


  }

  die() {
    console.log("You are dead!");
    process.exit();
  }

}

module.exports = {
  Player,
};
