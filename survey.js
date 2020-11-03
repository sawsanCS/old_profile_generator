const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/*What's your name? Nicknames are also acceptable :)
What's an activity you like doing?
What do you listen to while doing that?
Which meal is your favourite (eg: dinner, brunch, etc.)
What's your favourite thing to eat for that meal?
Which sport is your absolute favourite?
What is your superpower? In a few words, tell us what you are amazing at!*/

rl.question('What s your name? Nicknames are also acceptable :) ', (answer1) => {
  //process.stdout.write(`thank you for your feedback : ${answer1}`);
    rl.question('What s an activity you like doing? ', (answer2) => {
      //process.stdout.write(`thank you for your feedback : ${answer2}`);
      rl.question('What do you listen to while doing that? ', (answer3) =>{
        //process.stdout.write(`thank you for your feedback : ${answer3}`);
        rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)', (answer4) =>{
          //process.stdout.write(`thank you for your feedback : ${answer4}`);
        rl.question('What s your favourite thing to eat for that meal?', (answer5) =>{
          //process.stdout.write(`thank you for your feedback : ${answer5}`);
          rl.question('Which sport is your absolute favourite? ', (answer6) =>{
            //process.stdout.write(`thank you for your feedback : ${answer6}`);
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer7) =>{
              process.stdout.write(`thank you for your feedback : ${answer1}  ${answer2} ${answer3} ${answer4}  ${answer5} ${answer6} ${answer7}`);
              rl.close();
          });
        });

        });

      });
    });
  });
        
        
});
