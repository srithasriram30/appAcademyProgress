const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });


let askGuess = (secretNumber, maxGuess, count = 0) => {


      rl.question('Enter a guess:', (answer) => {
        if(count<maxGuess){
            if(checkGuess(Number(answer),secretNumber)){
                console.log("Correct!");
                rl.close();
            } else {
                count++;
                askGuess(secretNumber, maxGuess, count);

            }
        } else{
            console.log("You lose!");
            rl.close();
        }



      });
}

let randomInRange = (min,max) => {
    return Math.floor(Math.random() * (max - min) + min);
}

let askRange = (maxGuess) => {
    rl.question('Enter a min number: ', (min) => {
        rl.question('Enter a max number: ', (max) => {
            console.log(`I'm thinking of a number between ${min} and ${max}`);
            let secretNumber = randomInRange(Number(min), Number(max));
            askGuess(secretNumber, maxGuess);

        });
    });
}

let checkGuess = (guess,secretNumber) => {
    if(guess>secretNumber){
        console.log("Too high.");
        return false;
    } else if(guess<secretNumber){
       console.log("Too low.");
        return false;
    } else {
        //console.log("Correct!");
        return true;
    }
}

let askGuessNo = () => {
    rl.question('Enter a max no of guesses:', (maxGuess)=>{
        askRange(Number(maxGuess));
    });
}

askGuessNo();
