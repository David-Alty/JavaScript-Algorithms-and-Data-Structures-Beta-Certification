/*In JavaScript, the Object.freeze() method is used to freeze an object, which means:

No new properties can be added to the object.
Existing properties cannot be removed.
Existing properties cannot be changed (their values remain constant).
The object's prototype cannot be modified.*/

Object.freeze(object);

/*Key Characteristics
Object.freeze() makes the object immutable in terms of its own properties (but not for nested objects).
It does not affect properties of nested objects; you would need to recursively freeze those for a deep freeze.
It returns the same object that is frozen.*/

// You can check if an object is frozen using the Object.isFrozen() method:

const obj = { name: "David" };
console.log(Object.isFrozen(obj)); // Output: false

Object.freeze(obj);
console.log(Object.isFrozen(obj)); // Output: true

