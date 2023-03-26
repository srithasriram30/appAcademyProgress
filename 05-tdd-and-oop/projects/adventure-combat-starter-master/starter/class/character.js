class Character {

  constructor(name, description, currentRoom) {
    // Fill this in
    this.name = name;
    this.description = description;
    this.currentRoom = currentRoom;
    this.strength = 10;
    this.health = 100;
    this.items = [];
  }

  applyDamage(amount) {
    // Fill this in
    this.health -= amount;
    if(this.health === 0){
      this.die();
    }
  }

  die() {
    // Fill this in

    while(this.items.length>0){
      let item = this.items.pop();
      this.currentRoom.items.push(item);
    }
    this.currentRoom = null;
  }

}

module.exports = {
  Character,
};
