 //functions related to dog care
  function wakeDog (dogName = "Xerox", dogBreed = "Golden Retriever") {
    console.log(`Wake ${dogName} the ${dogBreed}`);
    return `Wake ${dogName} the ${dogBreed}`;
  }
  
  function leashDog (dogName = "Boo Radley", dogBreed = "Pibble") {
    console.log(`Leash ${dogName} the ${dogBreed}`);
    return `Leash ${dogName} the ${dogBreed}`;
  }
  
  function walkToPark (dogName = "Xerox", dogBreed = "Golden Retriever") {
    console.log(`Walk to the park with ${dogName} the ${dogBreed}`);
    return `Walk to the park with ${dogName} the ${dogBreed}`;
  }
  
  function throwFrisbee (dogName = "Xerox", dogBreed = "Golden Retriever") {
    console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);
    return `Throw the frisbee for ${dogName} the ${dogBreed}`;
  }
  
  function walkHome (dogName = "Xerox", dogBreed = "Golden Retriever") {
    console.log(`Walk home with ${dogName} the ${dogBreed}`);
    return `Walk home with ${dogName} the ${dogBreed}`;
  }
  
  function unleashDog (dogName = "Xerox", dogBreed = "Golden Retriever") {
    console.log(`Unleash ${dogName} the ${dogBreed}`);
    return `Unleash ${dogName} the ${dogBreed}`;
  }

  //arrray of functions
  const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

  //function to process the array of functions

  function exerciseDog (dogName, dogBreed) {
     const responses =  routine.map(element => element(dogName, dogBreed));
     return responses;
  }

wakeDog('Xerox', "Border Collie");
