const friends = ["Bobby", "Dolly", "Molly", "Sully"];

// Looping backwards
for (let index = friends.length - 1; index >= 0; index--) {
  console.log(`Element found at index ${index} : ${friends[index]}`);
}

// nested loops example
for (let exercise = 1; exercise <= 3; exercise++) {
  console.log(`Starting exercise ${exercise}`);
  const totalReps = 5;
  for (let reps = 1; reps <= totalReps; reps++) {
    console.log(` -> Exercise ${exercise} : Executing repetition ${reps} 🏋️`);
  }
}

// nested loops example
const foods = [
  ["Chicken", "Fish", "Eggs"],
  ["Rice", "Potato", "Oats", "Pasta"],
  ["Oliove Oil", "Avocado", "Nuts"],
  ["Banana", "Orange", "Apple"],
];

for (let index = 0; index < foods.length; index++) {
  if (index !== 2) continue;
  console.log("Excellent Fat Sources: ");
  for (let subIndex = 0; subIndex < foods[index].length; subIndex++) {
    console.log(`${subIndex + 1}: ${foods[index][subIndex]}`);
  }
}
