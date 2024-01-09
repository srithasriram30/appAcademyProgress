// Your code here
class ValidationError extends Error{
  construtor(message){
    this.name = "ValidationError";
    this.message = message;
  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = ValidationError;
} catch {
  module.exports = null;
}