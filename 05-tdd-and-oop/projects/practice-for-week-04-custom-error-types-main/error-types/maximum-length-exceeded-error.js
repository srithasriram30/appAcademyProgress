const ValidationError = require('./validation-error');

// Your code here
class MaximumLengthExceededError extends ValidationError {
  constructor(...params) {
    // Pass all arguments to parent constructor
    super(...params);

    // Maintains proper stack trace for where error was thrown (available on V8)
    // if (Error.captureStackTrace) {
    //     Error.captureStackTrace(this, MaximumLengthExceededError);
    // }

    this.name = 'MaximumLengthExceededError';
    let excessLength = params[0];

    console.log(excessLength);

    if(excessLength === undefined){
      this.message = 'Maximum length exceeded';
    } else if(excessLength > 0){
      this.message = `Maximum length exceeded by ${excessLength}`;
    }

}
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = MaximumLengthExceededError;
} catch {
  module.exports = null;
}