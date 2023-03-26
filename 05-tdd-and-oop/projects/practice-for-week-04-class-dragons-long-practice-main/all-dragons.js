const FriendlyDragon = require("./classes/friendly-dragon");
const EvilDragon = require("./classes/evil-dragon");
const { getDragons } = require("./classes/friendly-dragon");

let falkorGoals = ["save Atreyu from the swamp", "save Atreyu from the Nothing","scare the local bullies into a dumpster"]
let falkor = new FriendlyDragon("Falkor", "white", falkorGoals, "Bastian");

let smaugEvils = ["take over your mountain kingdom", "steal all your dwarven gold", "burn down your floating village" ];

let smaug = new EvilDragon("Smaug","black", smaugEvils, "Dwarf King");

let allDragons = getDragons(falkor,smaug);


/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports.falkor = falkor
  module.exports.smaug = smaug
  module.exports.allDragons = allDragons
} catch {
  module.exports = null;
}
