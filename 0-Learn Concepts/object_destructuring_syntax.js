// In the last two steps, you have been accessing properties from the myFavoriteFootballTeam object using dot notation and assigning them to new const variables.
//  But in JavaScript, there is an easier way to accomplish the same goal.

// The object destructuring syntax allows you to unpack values from arrays and objects:

const developerObj = {
    name: "Jessica Wilkins",
    isDeveloper: true
  };
  
  // Object destructuring
  const { name, isDeveloper } = developerObj; // developerObj,name , developerObj.isDeveloper 
