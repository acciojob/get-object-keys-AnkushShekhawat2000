//your JS code here. If required.
// Creating the student object
const student = {
  name: "Ankush"
};

// Adding a property to the Object prototype
Object.prototype.getKeys = function() {
  return Object.keys(this);
};

// Testing the getKeys() method on the student object
const keysArray = student.getKeys();
console.log(keysArray); // Output: ["name"]
