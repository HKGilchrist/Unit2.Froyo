// Prompt in browser.
let inputFlavors = prompt(
  "Please type in your order, with each flavor seperated by a comma.",
  "coffee,oreo,vanilla,malt,vanilla,coffee,coffee"
);
console.log("Your order: ", inputFlavors);

// Split the string into an array of strings.
const flavorArr = inputFlavors.split(",");

// Track flavors with an object. Object is empty because it will be built with customer input + loop.
const orderedFlavors = {};

// Loop through the array of flavors to update the object.
for (let i = 0; i < flavorArr.length; i++) {
  let key = flavorArr[i];
  let objectKeys = Object.keys(orderedFlavors);
  if (objectKeys.includes(key)) {
    orderedFlavors[key] = orderedFlavors[key] + 1;
  } else {
    orderedFlavors[key] = 1;
  }
}

// Display object as a table.
console.table(orderedFlavors);
//
//
//
// Resources Used: block14 workshop & guided practice, flex day activity.
