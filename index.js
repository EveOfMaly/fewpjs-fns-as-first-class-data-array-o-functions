 //functions related to dog care
  function wakeDog (dogName, dogBreed) {
    console.log(`Wake ${dogName} the ${dogBreed}`);
  }
  
  function LeashDog (dogName, dogBreed) {
    console.log(`Lease ${dogName} the ${dogBreed}`);
  }
  
  function walkToPark (dogName, dogBreed) {
    console.log(`Walk to the part with ${dogName} the ${dogBreed}`);
  }
  
  function throwFrisbee (dogName, dogBreed) {
    console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);
  }
  
  function walkHome (dogName, dogBreed) {
    console.log(`Wake home with ${dogName} the ${dogBreed}`);
  }
  
  function unleashDog (dogName, dogBreed) {
    console.log(`Unleash ${dogName} the ${dogBreed}`);
  }

  //arrray of functions
  const routine = [wakeDog, LeashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

  //function to process the array of functions

  function exerciseDog (dogName, dogBreed) {
     const responses =  routine.map(element => element(dogName, dogBreed));
     return responses;
  }

  exerciseDog ('Xerox', "Border Collie");
