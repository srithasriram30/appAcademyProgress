// Your code here
const Calculator = require("./02-calculator");
class FancyCalculator extends Calculator {

	constructor(total){
		super(total);
	}

	setTotal = newTotal =>
		this.total = newTotal;

	squared = () => {
			let totalSquared = this.total * this.total;
			return this.total = totalSquared;
		}

	modulo = num => this.total %= num;


}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = FancyCalculator;
} catch {
	module.exports = null;
}
